$(document).ready(function(){
    function minimum(a, b){
        return a < b ? a : b;
    }
    console.log(minimum(0,10));
    console.log(minimum(0,-10));

    function isEven(a){
        if(a < 0){
            a *= -1;
        }
        if(a === 0){
            return true;
        }
        else if(a === 1){
            return false;
        }
        else{
            return isEven(a-2);
        }
    }
    console.log(isEven(50));
    console.log(isEven(75));
    console.log(isEven(-1));

    function countChar(string, char){
        var count = 0;
        for(var i = 0; i < string.length; i++){
            if(string[i] === char){
                count++;
            }
        }
        return count;
    }
    console.log(countChar("BBC", 'B'));
    console.log(countChar("kakkerlak", "k"));
});
