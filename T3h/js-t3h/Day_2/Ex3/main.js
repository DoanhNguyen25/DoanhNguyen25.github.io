let str="This is a beautiful day";
let a=(x)=>
{
    let str2="";
    for(let i=x.length-1; i>=0;i--)
    {
        str2= str2+x[i];
    }
    return str2;
}
console.log(a(str));
