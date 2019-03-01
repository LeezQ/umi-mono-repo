import { JSEncrypt } from 'jsencrypt';

export default function rsa(pwd, publicKey) {
  const encrypt = new JSEncrypt();

  if (!pwd || typeof pwd !== 'string') {
    return '';
  }

  let newPwd = pwd;
  if (newPwd.length > 230) {
    newPwd = newPwd.substr(0, 230);
  }

  encrypt.setPublicKey(publicKey);
  const result = encrypt.encrypt(newPwd);
  // let tryTimes = 0;
  // while (result.length !== 344) {
  //   // 如果加密后的字符串长度不是344，后端必然解密失败
  //   result = encrypt.encrypt(newPwd);
  //   if (tryTimes > 10) {
  //     // 最多重试十次
  //     return '';
  //   }
  //   tryTimes += 1;
  // }
  return result;
}
