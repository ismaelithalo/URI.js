var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [a,b,c] = input.split(' ').map(num => parseInt(num));

var list = [a,b,c];
    if (list[0] > list[1]){
        let temp = list[0];
        list[0] = list[1];
        list[1] = temp;
    }
    if (list[1] > list[2]) {
        let temp = list[1];
        list[1] = list[2];
        list[2] = temp;
    }
    if (list[0] > list[1]){
        let temp = list[0];
        list[0] = list[1];
        list[1] = temp;
    }
    console.log(`${list[0]}\n${list[1]}\n${list[2]}\n\n${a}\n${b}\n${c}`);