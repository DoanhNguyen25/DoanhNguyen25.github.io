const a=[1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
let check=false;
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        for(let g=j+1;g<a.length;g++)
        {
            if(a[i]+a[j]+a[g] === 30)
            {
                console.log("yes");
                check=true;
                return;
            }
        }
    }
}
if(check===true)
{
    console.log('yes');
}
else
{
    console.log('no');
}
