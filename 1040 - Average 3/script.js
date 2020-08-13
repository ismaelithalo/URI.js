var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [N,E] = input.split('\n');
var [N1,N2,N3,N4] = N.split(' ').map(num => parseFloat(num));
var average = ((N1*2)+(N2*3)+(N3*4)+N4)/10;
console.log(`Media: ${average.toFixed(1)}`);
    if (average >= 7.0)
        console.log(`Aluno aprovado.`);
    else if (average < 5.0)
        console.log(`Aluno reprovado.`);
    else {
        console.log(`Aluno em exame.\nNota do exame: ${E}`);
        var newAverage = (average+parseFloat(E))/2;
        if (newAverage >= 5.0) 
            console.log(`Aluno aprovado.\nMedia final: ${newAverage.toFixed(1)}`);
        else
            console.log(`Aluno reprovado.\nMedia final: ${newAverage.toFixed(1)}`);
    }

