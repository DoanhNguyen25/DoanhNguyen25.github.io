function isPrime(x)
{
    if(x<2)
    {
        return false;
    }
    else if(x===2)
    {
        return true;
    }
    else
    {
        for(let i=2; i<=Math.sqrt(x); i++)
        {
            if(x%i===0)
            {
                return false;
            }
        }
        return true;
    }
}
const a=[1,2,3,2,3,4,6,7];
const b=a.filter((x)=>
{
    return isPrime(x)==true;
})
console.log(b);