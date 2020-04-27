const a=[1,1,1,1,1,1,1,1,1,1]
let max1=a[0];
let max2=a[0];
for(let i=0;i<a.length;i++)
{
    if(max1<a[i])
    {
        max1=a[i];
    }
}
for(let j=0;j<a.length;j++)
{
    if(max1 > a[j] && max2<a[j])
    {
        max2=a[j];
    }
    else if(max2===a[j] && max1===a[j])
    {
        max2=-1;
    }
}
console.log(max2);