var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var time = parseInt(input);
var hours = (time-(time%3600))/3600; 
    time = time%3600;
var minutes = (time-(time%60))/60;
    time = time%60;
console.log(`${hours}:${minutes}:${(time-(time%1))/1}`);



