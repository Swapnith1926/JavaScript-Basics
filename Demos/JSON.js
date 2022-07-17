// use of parse()
var json = '{ "firstName":"Swapnith", "lastName":"Reddy"}';
var nameObj = JSON.parse(json); //will convert JSON string into an JavaScript object
console.log(nameObj);
console.log(nameObj.firstName + " " + nameObj.lastName);

// use of stringify()
var jScores = { Java: 70, JavaScript: 80, CSS: 30 };
var tScores = JSON.stringify(jScores); //will convert object to JSON string
console.log(typeof jScores); // returns object
console.log(typeof tScores); // returns string
console.log(jScores); // returns object
console.log(tScores); // returns string
