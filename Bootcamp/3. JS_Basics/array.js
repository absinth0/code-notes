console.log("Hi!");

function printReverse(arr) {
    for (let index = arr.length - 1; index > -1; index--) {
        console.log(arr[index]);

    }
}

function isUniform(arr) {
    var item = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (item !== arr[index]) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var result = 0;
    for (let index = 0; index < array.length; index++) {
        result += array[index];

    }
    return result;
}

function max(array) {
    // var max = array[0];
    // for (let index = 1; index < array.length; index++) {
    //     if (max < array[index]) {
    //         max = array[index];
    //     }
    // }
    // return max;
    var max = array[0];
    array.forEach(function(item) {
        if(max<item){
            max = item;
        }
    });
    return max;
}