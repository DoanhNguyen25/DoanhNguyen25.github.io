let n=1234;
let a;
let dem=0;
while(n!=0)
{
    a=n%10;
    n=n/10;
    if(a%2==0)
    {
        dem++;
    }
}
if(dem===0)
{
    console.log("yes");
}
else
{
    console.log("no");
}