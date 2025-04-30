// -------------- 1 ------------------
// let webPage = open("https://leetcode.com/", "_blank", "width=600,height=500");

// webPage.scrollTo(0, document.body.scrollHeight);

// setTimeout(() => {
//     if (webPage) {
//         webPage.close();
//     }
// }, 6000);

// webPage.document.write("Abdelrahman Badawy");
// Problem: All Content in webPage will be replaced with "Abdelrahman Badawy" 

// -------------- 2 ------------------
let imags = document.getElementsByTagName("img");
let imgs = document.images;
console.log(imags);
console.log(imgs);


let cities = document.getElementById("city").options;
console.log(cities);
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i].value);;

}


let secondTable = document.getElementById("second-table");
let tdsRows = secondTable.getElementsByTagName("td");
console.log(tdsRows);


// https://stackoverflow.com/questions/7184562/how-to-get-elements-with-multiple-classes
let fontBlueBGrey = document.getElementsByClassName("fontBlue BGrey");
console.log(fontBlueBGrey);


// -------------- 4 ------------------
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp
setInterval(() => {
    let dateTime = new Date();
    document.title = dateTime.toLocaleString();
}, 1000);

// ------------- Form ----------------

let userData = window.location.search;
// console.log(userData);
if (userData) {

    let removeFirstChar = userData.substring(1);
    // console.log(removeFirstChar);

    let userArray = removeFirstChar.split("&");
    // console.log(userArray);

    let userObj = {}

    userArray.forEach(element => {
        let userDataKeyVal = element.split("=");
        userObj[userDataKeyVal[0]] = userDataKeyVal[1];
    });
    console.log(userObj);
}



