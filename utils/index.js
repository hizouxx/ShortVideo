/**
 * 参数拼接字符串【如：("https://github.com",{a:1,b:2}) => 'https://github.com?a=1&b=2'】
 * @desc 用于接口参数
 * @param {String} url url
 * @param {Object} params 参数
 */
export function getParamsUrl(url, params) {
  let dataStr = '';
  Object.keys(params).forEach(key => {
    dataStr += key + '=' + params[key] + '&';
  });

  return dataStr !== ''
    ? url + '?' + dataStr.substr(0, dataStr.lastIndexOf('&'))
    : url;
}
/**
 * 数量转换格式【如：（11000,2） => 1.10w】
 * @desc 用于点赞数量、评论数量、转发数量
 * @param {Number} num 要转化的数量
 * @param {Number} point 保留小数点后位数
 */
export function tranNumber(num, point) {
  // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
  let numStr = num.toString().split('.')[0];
  if (numStr.length < 5) {
    // 判断数字有多长,如果小于5,,表示1万以内的数字,让其直接显示
    console.log(numStr);
    return numStr;
  } else if (numStr.length >= 5 && numStr.length <= 8) {
    // 如果数字大于5位,小于8位,让其数字后面加单位万
    let decimal = numStr.substring(
      numStr.length - 4,
      numStr.length - 4 + point,
    );
    console.log(decimal);
    // 由千位,百位组成的一个数字
    return parseFloat(parseInt(num / 10000) + '.' + decimal) + 'w';
  } else if (numStr.length > 8) {
    // 如果数字大于8位,让其数字后面加单位亿
    let decimal = numStr.substring(
      numStr.length - 8,
      numStr.length - 8 + point,
    );
    console.log(decimal);
    return parseFloat(parseInt(num / 100000000) + '.' + decimal) + 'e';
  }
}
/**
 * 数组打乱顺序【如：([{id:1},{id:2},{id:3}]) => [{id:3},{id:1},{id:2}]等等】
 * @desc 用于打乱视频数组，随即展示
 * @param {Array} arr 被打乱的数组
 */
export function shuffle(arr) {
  let i = arr.length;
  let j = 0;
  while (i) {
    j = Math.floor(Math.random() * i--);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
