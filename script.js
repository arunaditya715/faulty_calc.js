//faulty calculator in javascript
let random=Math.random();
let a =prompt("Please enter a random  first number");
let b =prompt("Please enter a random  second number");
let c =prompt("Please enter a random operator");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}