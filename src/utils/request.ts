import fetch from 'dva/fetch';
import qs from 'qs';
import router from 'umi/router';

import { notification } from 'antd';
import message from 'antd/lib/message';

import getCookie from './getCookie';

const messages = {
  '403Code': '返回码 403',
  '403Message': '无接口访问权限，请咨询管理员。',
};

const check401 = res => {
  return res; // 暂时始终返回 res
};

const check403 = res => {
  // 配合权限SDK的403跳转
  res
    .json()
    .then(jsonResult => {
      if (jsonResult.code === '302' && jsonResult.location !== undefined) {
        window.location.href = jsonResult.location;
      }
    })
    .catch(() => {
      notification.warning({
        message: messages['403Code'],
        description: messages['403Message'],
      });
    });
  return res;
};

const check200 = (res, configs) => {
  if (res.ok) {
    return res.json().then(result => {
      const messageContent = configs.messageParse(result);
      const displayControl = configs.displayControl;
      // 解析出业务 success
      if (result.success) {
        if (configs.successMsg) {
          message.success(configs.successMsg);
        }
      } else {
        const url = window.location.href.toString();
        if (result.errorCode === '401') {
          if (url.indexOf('/account/login') < 0) {
            router.push(`/account/login?goto=${encodeURIComponent(url)}`);
          }
          return res; // 暂时始终返回 res
        }

        if (result.errorCode === '403') {
          router.push('/403');
          return res; // 暂时始终返回 res
        }

        switch (displayControl.type) {
          case 'message':
            message.error(messageContent.message, displayControl.duration);
            break;
          // throw messageContent.message;
          default:
            notification.error({
              message: '出错了',
              description: messageContent.message,
            });
            break;
          // throw messageContent.message;
        }
      }
      return result;
    });
  }
};

const errorMessages = res => {
  return `${res.status} ${res.statusText}`;
};

const check404or50x = res => {
  return new Promise(() => {
    console.log(`${res.status}: ${res.statusText}`);
    return;
  });
};

const checkOtherCode = res => {
  return new Promise((_, reject) => {
    let err;
    try {
      res.json().then(jsonResult => {
        err =
          (jsonResult.reasons && jsonResult.reasons[0] && jsonResult.reasons[0].content) ||
          errorMessages(res);
        reject(err);
        message.error(err);
      });
    } catch (e) {
      err = errorMessages(res);
      reject(err);
    }
  });
};

const beforeSend = newOptions => {
  if (newOptions.method !== 'GET') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      ...newOptions.headers,
    };
    const contentType = newOptions.headers['Content-Type'];

    if (contentType.indexOf('form-urlencoded') >= 0) {
      newOptions.body = qs.stringify(newOptions.data || {});
      // 如果 Content-Type 是json 的话，自动处理下 stringify
    } else if (contentType.indexOf('json') >= 0) {
      newOptions.body = JSON.stringify(newOptions.data || {});
    } else if (contentType.indexOf('form-data') >= 0) {
      // 如果不是 json，则删除 Content-Type ,让 浏览器自动添加，
      // 不然 form-data 的 boundary 设置不上
      // see more: https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
      delete newOptions.headers['Content-Type'];
    }
  }
  return newOptions;
};

/**
 * url 添加 ctoken
 * @param {string} url
 */
const addUrlCtoken = url => {
  let realURL = url;
  const ctoken = getCookie('ctoken');
  if (ctoken) {
    const str = url.indexOf('?') > -1 ? '&' : '?';
    realURL = `${url}${str}ctoken=${encodeURIComponent(ctoken)}`;
  }
  return realURL;
};

const commonFetch = (newUrl, newOptions, newConfigs) => {
  return fetch(newUrl, newOptions).then(res => {
    if (res.status === 401) {
      // 401 未登录
      return check401(res);
    } else if (res.status === 403) {
      // 403 无权限
      return check403(res);
    } else if (res.status === 404 || res.status >= 500) {
      return check404or50x(res);
    } else if (res.status === 200) {
      return check200(res, newConfigs);
    } else {
      // 其他请求码
      return checkOtherCode(res);
    }
  });
};

export interface IOptions {
  method: string;
  headers?: any;
  params?: any;
  body?: any;
  data?: any;
}

const request = (url, options?: IOptions | any, configs = {}) => {
  let newOptions = {
    method: 'GET',
    credentials: 'same-origin',
    ...(options || {}),
    headers: { Accept: 'application/json', ...(options.headers || {}) }, // 推荐默认 'application/json' 传参
    data: options.body || options.params || options.data, // 将各种 method 的数据传递都统一放到 data 字段去处理数据，以支持 GET 方法时也可以写成 request(url, { params: data }) 这样的方式
  };

  const newConfigs = {
    ctoken: true,
    messageParse: resJson => {
      return {
        success: typeof resJson.success !== 'undefined' ? resJson.success : true,
        message: resJson.errorMsg || '',
      };
    },
    displayControl: {
      type: 'modal',
      duration: 3,
    },
    ...configs,
  };

  newOptions = beforeSend(newOptions);

  let newUrl = url;
  if ((newOptions.method === 'GET' || newOptions.method === 'DELETE') && options) {
    delete newOptions.body;
    newUrl += `?${qs.stringify(newOptions.data)}`;
  }

  if (newConfigs.ctoken) {
    newUrl = addUrlCtoken(newUrl);
  }

  return commonFetch(newUrl, newOptions, newConfigs);
};

export default request;
