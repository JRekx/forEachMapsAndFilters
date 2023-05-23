function doubleValues (arr) {
    let doubledArray = [];
arr.forEach(function(value){
    doubledArray.push(value * 2);
});

return doubledArray;
}


function onlyEven(arr) {
    let evenArr = [];

    arr.forEach(function (val){
        if(val % 2 === 0) {
            evenArr.pust(val);
        }
    });
return evenArr;
};

function showFirstAndLast(arr){
    let fNLArr = [];
    arr.forEach(function(val){
        fNLArr.push(val[0] + val[val.length - 1]);

    });
    return fNLArr;
}

function addKeyAndValue(arr,key,value) {
    arr.forEach(function(val){
        val[key] = value;
    });
return arr;
}

function vowelCount(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = {};

    str.toLowerCase().split(``).forEach(function(char) {
        if(vowels.includes(char)) {
            if(count[char]) {
                count[char]++;
            } else {
                count[char] = 1;
            }
        }
    });

    return count;
}

//map

function doubleValueWitMap(array){
    return array.map(function(val){
        return val * 2
    });
}

function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val + i;
    });
}

function extractKey(arr, key) {
    return arr.map(function (val){
        return val[key];
    });
}


function extraxtFullName(arr){
    return arr.map(function (val) {
        return val[`first`] + `` + val[`last`];
    });
}

//filter 

function filterByValue(arr, key){
    return arr.filter(function (val){
        return val[key] !== undefined;
    });
}

function find (arr, searchVal) {
    return arr.filter(function(val){
        return val === searchVal;
    })[0];
}

function findInObj(arr,key,searchVal){
    return arr.filter(function(val){
        return val[key] === searchVal
    })
}

function removeVowels(str){
    const vowels = `aeiou`;
    return str
    .toLowerCase()
    .split(``)
    .filter(function(val){
        return vowels.indexOf(val) === -1
    })
    .join(``);
}



function doubleOddNumbers(arr) {
    return arr
    .filter(function(val) {
        return val % 2 !==0;
    })
    .map(function(val){
        return val * 2;
    });
}

