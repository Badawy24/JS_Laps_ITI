// -------- 1 --------
function stringPascalCase(str) {

    let strToArray = str.split(' ');
    let mapArray = strToArray.map((wordFirstUpper) => {
        return wordFirstUpper.charAt(0).toUpperCase() + wordFirstUpper.slice(1).toLowerCase();
    });
    return mapArray.join(' ')
}

// -------- 2 --------

function longestWord(str) {
    let strToArray = str.split(' ');

    let lengthOfWords = strToArray.map((word) => {
        return (word.length);
    });
    let max = 0;
    let targetIndex = 0;
    for (let i = 0; i < lengthOfWords.length; i++) {
        if (lengthOfWords[i] > max) {
            max = lengthOfWords[i];
            targetIndex = lengthOfWords.indexOf(lengthOfWords[i])
        }
    }
    return strToArray[targetIndex];
}

// -------- 3 --------

function alphabeticalOrder(str) {
    let strToArray = str.split('');
    return strToArray.sort().join('');
}

// -------- 4 --------
function commonElements(arr1, arr2) {
        let resArray = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                resArray.push(arr1[i]);
            }
        }
    
        return resArray;
    
}


// -------- 5 --------
let arrWithDublicate = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

let arrWithoutDuplicate = arrWithDublicate.filter((num) => {
    if (arrWithoutDuplicate.includes(num)) {
        arrWithoutDuplicate.push(num);
}
});


console.log(arrWithoutDuplicate);
