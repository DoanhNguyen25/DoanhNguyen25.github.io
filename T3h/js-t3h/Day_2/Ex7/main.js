const max=(a,b,c)=>
{
    let max=a;
    if(max<b)
    {
        max=b;
    }
    if(max<c)
    {
        max=c;
    }
    return max;
}
console.log(max(2, 5, 1));