const num1 = 2;
const num2 =7;
const op = "+";

operate(num1,num2,op);

function operate(num1,num2,op){
    switch(op){
        case "+" : console.log(add(num1,num2));
            break;
        case "-" : console.log(sub(num1,num2));
            break;
        case "*" : console.log(mul(num1,num2));
            break;
        case "/" : console.log(div(num1,num2));
            break;
        default : "Invalid";
        
    }
}


function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

// console.log(add(2,7));
// console.log(sub(2,7));
// console.log(mul(2,7));
// console.log(div(2,7));
