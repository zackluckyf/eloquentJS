$(document).ready(function(){

    function Vector(x, y){
        this.x = x;
        this.y = y;
        this.plus = function(vector){
            return 'Vector{x: ' + (this.x + vector.x) + ', y: ' + (this.y + vector.y) + '}';
        }
        this.minus = function(vector){
            return 'Vector{x: ' + (this.x - vector.x) + ', y: ' + (this.y - vector.y) + '}';
        }
        this.length = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }

    console.log(new Vector(1, 2).plus(new Vector(2, 3)));
    // → Vector{x: 3, y: 5}
    console.log(new Vector(1, 2).minus(new Vector(2, 3)));
    // → Vector{x: -1, y: -1}
    console.log(new Vector(3, 4).length);
    // → 5


    function ArraySeq(array){
        this.array = array;
    }

    function RangeSeq(min, max){
        this.array = [];
        for(var i = min; i < max+1; i++){
            this.array.push(i);
        }
    }

    function logFive(range){
        if(range.array.length < 5){
            for(var i = 0; i < range.array.length; i++){
                console.log(range.array[i]);
            }
        }
        else{
            for(var i = 0; i < 5; i++){
                console.log(range.array[i]);
            }
        }
    }

    logFive(new ArraySeq([1, 2]));
    // → 1
    // → 2
    logFive(new RangeSeq(100, 1000));
    // → 100
    // → 101
    // → 102
    // → 103
    // → 104
});
