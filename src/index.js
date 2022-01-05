module.exports = function reverse (n) {
  n = Math.abs(n);
    let m = n.toString().split("").reverse().join("");
return m;
}
