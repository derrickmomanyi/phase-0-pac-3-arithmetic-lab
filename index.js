function add(a,b){
    return a + b;
}

console.log(add(5,2))


function subtract(a,b){
    return -+(b-a);
}
console.log(subtract(1,5))


function multiply(a,b){
    return a * b;
}
console.log(multiply(5,2))

function divide(a,b){
    return a / b;
}

console.log(divide(10,2))


function increment(n){
    n++;
    return n;
}

console.log(increment(2))


function decrement(n){
    n--;
    return n;
}

console.log(decrement(2))

function makeInt(n){
    return parseInt(n);

}
console.log(makeInt("100"))

function makeInt(n){
    return parseInt(n, 10);
}
makeInt("100")

function preserveDecimal(n){
    return parseFloat(n);
}
console.log(preserveDecimal("100.25"))
