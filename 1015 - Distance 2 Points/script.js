var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [p1,p2] = input.split('\n');
var [x1,y1] = p1.split(' ').map(num => Number(num));
var [x2,y2] = p2.split(' ').map(num => Number(num));
var DISTANCE = 
    Math.sqrt(
        Math.pow((x2-x1),2)+
        Math.pow((y2-y1),2)
    );
console.log(`${DISTANCE.toFixed(4)}`);

