// getValues - принимает объект и возвращает массив его значений.

var object = {
    age: '12',
    height: '150',
    weight: '45'
};

function getValues (obj) {
    var arr = [];

    for (var value in obj) {
        arr.push(obj[value]);
    }
    
    return arr;
}

console.log(getValues(object));


// getKeys - принимает объект и возвращает массив его ключей.

function getKeys (obj) {
    var array = [];

    for (var key in obj) {
        array.push(key);
    }

    return array;
}

console.log(getKeys(object));

// getEntries - принимает объект и возвращает массив, который состоит из массивов, где 0 элемент ключ, а 1 - значение.

function getEntries(obj) {
    var resArray = [];
    
    for (var key in obj) {
        var insertArray = [];
        insertArray.push(key);
        insertArray.push(obj[key]);
        resArray.push(insertArray);
    } 

    return resArray;
}

console.log(getEntries(object));