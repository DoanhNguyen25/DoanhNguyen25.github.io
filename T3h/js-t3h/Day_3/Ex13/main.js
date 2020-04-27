const a=[9,8,7,6,5,4,3,2,1]
for(let i=0;i<a.length-1;i++)///selecttions sort
{
     let min=i;
    for(let j=i+1;j<a.length;j++)
    {
        if(a[min] > a[j])
        {
            min=j;
        }
    }
    let temp=a[min];
    a[min]=a[i];
    a[i]=temp;
}
console.log(a);