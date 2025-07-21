module.exports = function reverse(n) {
  let m = Math.abs(n).toString();
  m = m.split('').reverse().join('');
  return Number(m);
};
