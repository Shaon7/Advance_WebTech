
function add(a,b)
{
    return a+b;
}
const multi = (a,b)=> a*b; //arrow function


const minus = (a=0,b=0)=> //arrow function with default parameters
{
    return a-b;
}
//console.log(add(4,5));
//console.log(multi(4,5));
//console.log(minus(4));
//callback function
const print = (s)=>console.log(s);

const sum = (a,b,f)=>
{
    s = a+b;
    f(s);
}
//sum(5,5,print);


// Async function

console.log("Start");

setTimeout(() => {
    console.log("Call back function");
    
}, 2000);
console.log("End");
