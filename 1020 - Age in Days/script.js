var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var days = parseInt(input);
var years = (days-(days%365))/365; 
    days = days%365;
var months = (days-(days%30))/30;
    days = days%30;

console.log(
    `${years} ano(s)\n${months} mes(es)\n${(days-(days%1))/1} dia(s)`
    );



