var empOne = {
    name: "Swapnith",
    empNumber: 19,
    emailId: "swapnithreddy13@gmail.com"
};

var empTwo = {
    name: "Shreya",
    empNumber: 26,
    emailId: "shreyareddy26@gmail.com"
};

//to get property names
console.log("property names : ")
for (let property in empOne) {
    console.log(property);
}

// to get the values of property
console.log("property values:")
for (let property in empOne) {
    console.log(empOne[property]);
}

// to get the values of property using Object.values()
console.log("property values using Object.values():")
console.log(Object.values(empOne));
//to get property names
console.log("property names : ")
for (let property in empTwo) {
    console.log(property);
}

// to get the values of property
console.log("property values:")
for (let property in empTwo) {
    console.log(empTwo[property]);
}

// to get the values of property using Object.values()
console.log("property values using Object.values():")
console.log(Object.values(empTwo));