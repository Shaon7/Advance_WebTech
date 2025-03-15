arr1 = [1,2,3,4];
arr2 = [6,4,1,4];

arr3 = [...arr1,...arr2];//spread operator


// rest operator
const print=(...n)=>
{
    console.log(...n); 
    
}
print(arr3);
