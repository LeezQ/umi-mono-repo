export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export function getText(value, list = []) {
  let text = '';
  if (value) {
    list.forEach(item => {
      if (item.value === value || item.keyValue === value) {
        text = item.text || item.keyName;
      }
    });
  }
  return text;
}
export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4() + s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
}
