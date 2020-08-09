var input = require('fs').readFileSync('dev/stdin', 'utf8');
//console.log(`${Number(input)*2} minutos`); essa linha eh suficiente
var distance = parseInt(input);
var time = distance*2;
console.log(`${time} minutos`);


