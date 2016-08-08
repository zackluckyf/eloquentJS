function range(first, last, increment) {
    if (increment === undefined) {
        increment = 1;
    }
    var array = [];
    if (first > last) {
        for (var i = first; i > last - 1; i += increment) {
            array.push(i);
        }
    } else {
        for (var i = first; i < last + 1; i += increment) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

function reverseArray(array) {
    var reversedArray = [];
    for (var i = array.length - 1; i > -1; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray
}

function reverseArrayInPlace(array) {
    var priorElement;
    for (var i = 0; i < array.length / 2; i++) {
        priorElement = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = priorElement;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

function deepEqual(obj1, obj2) {
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (var prop in obj1) {
            if (typeof obj1[prop] === 'object' & obj1[prop] !== null && typeof obj2[prop] === 'object' & obj2[prop] !== null) {
                deepEqual(obj1[prop], obj2[prop]);
            } else if (obj1[prop] !== obj2[prop]) {
                return false;
            }
        }
        return true;
    } else {
        return obj1 === obj2;
    }
}

var obj = {
    here: {
        is: "an"
    },
    object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));
// → false
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));
// → true
