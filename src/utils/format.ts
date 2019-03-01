import moment from 'moment';

/**
 * 金额格式化
 * @param date
 */
interface IMoney {
  amount: number;
}
export function formatMoney(money: number | IMoney) {
  if (typeof money === 'string') {
    return money;
  } else if (typeof money === 'number') {
    return money.toFixed(2);
  } else if (money && typeof money.amount === 'number') {
    return (money as any).amount.toFixed(2);
  }
  return '-';
}

/**
 * 日期格式化
 * @param date
 */
export function formatTime(date, format = 'YYYY-MM-DD HH:mm:ss') {
  return moment(date).format(format);
}
