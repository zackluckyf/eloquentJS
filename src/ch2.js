for (var i = 0; i < 7; i++) {
    word = '';
    for (var j = 0; j <= i; j++) {
        word += '#';
    }
    console.log(word + '\n');
}

var numbers = '';
for (var i = 0; i < 101; i++) {
    if (i === 0) {
        //do nothing
    } else if (i % 5 === 0 && i % 3 === 0) {
        numbers += 'FizzBuzz ';
    } else if (i % 5 === 0) {
        numbers += 'Buzz ';
    } else if (i % 3 === 0) {
        numbers += 'Fizz ';
    } else {
        numbers += i + ' ';
    }
}
console.log(numbers);

var board = '';
var line = '';
// changing size changes the board to size x size
var size = 12;
for (var i = 0; i < size; i++) {
    line = '';
    if (i % 2 === 0) {
        for (var j = 0; j < size; j++) {
            if (j % 2 === 0) {
                line += ' ';
            } else {
                line += '#';
            }
        }
    } else {
        for (var j = 0; j < size; j++) {
            if (j % 2 === 0) {
                line += '#';
            } else {
                line += ' ';
            }
        }
    }
    board += line + '\n';
}
console.log(board);
