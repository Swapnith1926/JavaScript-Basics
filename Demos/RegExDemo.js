var regEx = /^[\w]+@[a-zA-Z]+\.(com|in)$/;
console.log("Exec Method of Regex :", regEx.exec("Swapnith13@gmail.com"));
console.log("Exec Method of Regex :", regEx.exec("Swapz_12@Gmail.in"));
console.log("Test Method of Regex :", regEx.exec("shreya1926@love.com"));
console.log("Test Method of Regex :", regEx.test("swaps@gmail.in"));
console.log(
  "Test Method of Regex :",
  regEx.test("shreyaswapnith1926@gmail.in")
);

var regEx1 = /h[abc]llo/;

console.log("Exec Method of Regex1 :", regEx1.exec("hcllo"));
console.log("Test Method of Regex1 :", regEx1.test("hacjjllo"));

var regEx2 = /c[a]+r/;

console.log("Exec Method of Regex2 :", regEx2.exec("cars"));
console.log("Test Method of Regex2 :", regEx2.test("carrrrs"));

var regEx3 = /((\d)\.(\d\d))$/;
console.log(regEx3.exec(2213.26));
