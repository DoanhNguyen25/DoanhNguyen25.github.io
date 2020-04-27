const n=10;
function isPrime(a)
{
    if(a<2)
    {
        return false;
    }
    else if(a===2)
    {
        return true;
    }
    else
    {
        for(let i=2; i<=Math.sqrt(a); i++)
        {
            if(a%i==0)
            {
                return false;
            }
        }
        return true;
    }
}

for(let i=1;i<=n;i++)
{
    if(isPrime(i))
    {console.log(i);}
}
