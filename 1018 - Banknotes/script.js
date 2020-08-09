var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var v = parseInt(input);
    console.log(v);
    console.log(`${(v-(v%100))/100} nota(s) de R$ 100,00`);
        v = v%100;
    console.log(`${(v-(v%50))/50} nota(s) de R$ 50,00`);
        v = v%50;
    console.log(`${(v-(v%20))/20} nota(s) de R$ 20,00`);
        v = v%20;
    console.log(`${(v-(v%10))/10} nota(s) de R$ 10,00`);
        v = v%10;
    console.log(`${(v-(v%5))/5} nota(s) de R$ 5,00`);
        v = v%5;
    console.log(`${(v-(v%2))/2} nota(s) de R$ 2,00`);
        v = v%2;
    console.log(`${(v-(v%1))/1} nota(s) de R$ 1,00`);


