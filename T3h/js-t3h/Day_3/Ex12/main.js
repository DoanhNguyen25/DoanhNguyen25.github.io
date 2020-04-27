const a=[1,3,6,9,11,20];
let k=-5;
let x;
if(a[a.length-1] < k)
{
    a.push(k);
}
else
{
    let i=a.length;
    while( a[i-1] > k && i>0)
    {
        a[i]=a[i-1];
        i--;
    }
    a[i]=k;
}
console.log(a);