var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [s,e] = input.split(' ').map(num => parseInt(num));
    if (e-s > 0)
        console.log(`O JOGO DUROU ${e-s} HORA(S)`);
    else if (e-s === 0)
        console.log(`O JOGO DUROU 24 HORA(S)`);
    else
        console.log(`O JOGO DUROU ${(24-s)+e} HORA(S)`);
