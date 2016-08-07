$(document).ready(function(){
    var arrays = [[1, 2, 3], [4, 5], [6]];
    // use reduce and concat to flatten and array of arrays
    arrays = [].concat.apply([], arrays)
    console.log(arrays);
    // → [1, 2, 3, 4, 5, 6]

    function every(array, condition){
        for(var i = 0; i < array.length; i++){
            if(!condition(array[i])){
                return false;
            }
        }
        return true;
    }

    function some(array, condition){
        for(var i = 0; i < array.length; i++){
            if(condition(array[i])){
                return true;
            }
        }
        return false;
    }

    console.log(every([NaN, NaN, NaN], isNaN));
    // → true
    console.log(every([NaN, NaN, 4], isNaN));
    // → false
    console.log(some([NaN, 3, 4], isNaN));
    // → true
    console.log(some([2, 3, 4], isNaN));
    // → false
});
