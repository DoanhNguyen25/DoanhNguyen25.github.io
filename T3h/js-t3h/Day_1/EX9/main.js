let n=12345;
let sum=0;
let a;
let b=n;
while(n!=0)
{
    a= n%10;
    sum= sum*10 + a;
    n=Math.round(n/10);
}
if( b == sum)
{
    console.log('yes');
}
else
{
    console.log('no');
}