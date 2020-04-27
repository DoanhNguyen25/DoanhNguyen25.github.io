const a=[1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
let b=[];
for(let i=0; i<a.length; i++)
{
    let check=true;
    for(let j=i+1; j<a.length; j++)
    {
        if(a[i]===a[j])
        {
            check=false;
            break;
        }
    }
    if(check===true)
    {
        b.push(a[i]);
    }
}
let max=0;
for(let i=0; i<b.length; i++)
{
   
    let dem=0;
    for(let j=0; j<a.length; j++)
    {
        if(a[j]===b[i])
        {
            dem++;
        }
        
    }
    if(max<dem)
    {
        max=dem;
    }
    
}
console.log(max);
