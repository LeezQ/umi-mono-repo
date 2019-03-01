function config(api, sdkDir) {
  const tmp = sdkDir.split('/');
  const namespace = tmp[tmp.length - 1];
  return {
    api,
    sdkDir,
    namespace: `${namespace[0].toUpperCase()}${namespace.substr(1)}API`,
    camelCase: 'lower',
    templatePath: './src/services/sdk.njk',
    interfaceTemplatePath: './src/services/interface.njk',
    requestLib: false,
    hook: {
      customClassName: tagName => tagName.replace('Controller', ''),
      // 根据 api url 生成 service 函数名
      // customFunctionName: (data) => {
      //   return data.path
      //     .replace(/\//g, '_')
      //     .substr(1)
      //     .replace(/_(\w)/g, function (_all, letter) {
      //       return letter.toUpperCase();
      //     }) + `Using${data.method.toUpperCase()}`
      // }
    },
  };
}

module.exports = [
  // config('http://30.50.88.29:8080/v2/api-docs', './src/services/atgoperation'),
  // config('http://11.166.196.91:8080/v2/api-docs', './src/services/atgbusmng'),
  config('http://11.166.195.112:8001/v2/api-docs', './src/services/atgprocess'),
  // config('http://30.50.80.126:8080/v2/api-docs', './src/services/atgauth'),
  // config('http://30.49.6.88:8888/v2/api-docs', './src/services/atpayment'),
  // config('http://100.88.72.2:8080/v2/api-docs', './src/services/atgmessage'),
];
