var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var v = parseFloat(input).toFixed(2);
    console.log(`NOTAS:\n${(v-(v%100))/100} nota(s) de R$ 100.00`);
        v = v%100;
    console.log(`${(v-(v%50))/50} nota(s) de R$ 50.00`);
        v = v%50;
    console.log(`${(v-(v%20))/20} nota(s) de R$ 20.00`);
        v = v%20;
    console.log(`${(v-(v%10))/10} nota(s) de R$ 10.00`);
        v = v%10;
    console.log(`${(v-(v%5))/5} nota(s) de R$ 5.00`);
        v = v%5;
    console.log(`${(v-(v%2))/2} nota(s) de R$ 2.00`);
        v = v%2;
    console.log(`MOEDAS:\n${(v-(v%1))/1} moeda(s) de R$ 1.00`);
        v = v%1; 
    console.log(`${(v-(v%0.50))/0.50} moeda(s) de R$ 0.50`);
        v = v%0.50;
    console.log(`${(v-(v%0.25))/0.25} moeda(s) de R$ 0.25`);
        v = v%0.25;
    console.log(`${(v-(v%.10))/.10} moeda(s) de R$ 0.10`);
        v = v%.10;
    console.log(`${(v-(v%0.05))/0.05} moeda(s) de R$ 0.05`);
        v = v%0.05;
        v= v.toFixed(2);
    console.log(`${((v%1)/0.01)} moeda(s) de R$ 0.01`);

