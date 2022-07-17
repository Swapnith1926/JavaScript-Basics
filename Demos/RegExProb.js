let regex =
  /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})/;

var s = "Albert Einstein was born in Ulm, on 14/03/1879.";
console.log(
  s,
  regex.exec(s).find((date) => date.localedate)
);
