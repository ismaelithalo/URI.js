var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [x,y] = input.split(' ').map(num => parseFloat(num));

    if (x === 0)
        if (y != 0)
            console.log("Eixo Y");
        else
            console.log("Origem");
    else if (x > 0)
        if (y > 0)
            console.log("Q1");
        else if (y < 0)
            console.log("Q4");
        else 
            console.log("Eixo X");
    else
        if (y > 0)
            console.log("Q2");
        else if (y < 0)
            console.log("Q3");
        else  
            console.log("Eixo X");