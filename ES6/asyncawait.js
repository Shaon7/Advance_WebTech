
console.log("Start");

function delay(ms)
{
    return new Promise((resolve)=>{setTimeout(resolve,ms)});
}

async function fun() {

    console.log("Hello");
    
    await delay(2000)

    console.log("After wait");
    
    
}
fun();
console.log("End");

