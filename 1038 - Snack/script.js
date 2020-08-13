var input = require('fs').readFileSync('dev/stdin', 'utf8');
//
var [X,Y] = input.split(' ').map(num => parseInt(num));
var price = 0.00;
    switch (X) {
        case 1:
            price = 4.00;
            break;
        case 2:
            price = 4.50;
            break;
        case 3:
            price = 5.00;
            break;
        case 4:
            price = 2.00;
            break;
        case 5:
            price = 1.50;
            break;
    }

    console.log(`Total: R$ ${(price*Y).toFixed(2)}`);
