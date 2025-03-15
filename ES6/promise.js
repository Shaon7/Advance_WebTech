let p = new Promise((resolve,reject)=>
    {
    let flag = 1;
    if(flag==1)
    {
        resolve("True");
    }
    else
    {
        reject("False");
    }
})
p.then((msg)=>
{
    console.log("Flag is" + msg);
    
})
.catch((msg)=>{
    console.log("Flag is" + msg);
}
)