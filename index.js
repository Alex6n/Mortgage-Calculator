const prompt = require('prompt-sync')();

function mCalc() {
    let P = parseFloat(prompt('Enter the loan amount: '));
    let r = parseFloat(prompt('Enter the monthly interest rate (in percentage): '); // monthly intrest rate directly instead
    //let r = (parseFloat(prompt('Enter the annual interest rate (in percentage): ')) / 12) / 100;
    let n = parseFloat(prompt('Enter the number of years: ')) * 12;
    let M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    console.log(`Your monthly mortgage payment is: $${M.toFixed(2)}`);
}

mCalc()