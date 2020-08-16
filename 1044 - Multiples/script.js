var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [A,B] = input.split(' ').map(num => parseInt(num));
    if (A%B===0 || B%A===0)
        console.log(`Sao Multiplos`);
    else
        console.log(`Nao sao Multiplos`);