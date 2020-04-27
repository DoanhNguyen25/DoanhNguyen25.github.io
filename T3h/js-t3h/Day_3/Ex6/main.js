const a = [1, 2, 3, 4, 6, 7];
function minDistance(a, k) {
    let min = Math.abs(k - a[0]);
    for (let i = 0; i < a.length; i++) {
        if (min > (Math.abs(k - a[i]))) {
            min = Math.abs(k - a[i]);
        }
    }
    return min;
}
const k=5;
const distance=minDistance(a,k)
let b=[];
for(let i=0; i<a.length;i++)
{
    if(k > a[i])
    {
        if(k-a[i]===distance)
        {
            b.push(a[i]);
        }
    }
    else
    {
        if(Math.abs(k-a[i])===distance)
        {
            b.push(a[i]);
        }
    }
}
console.log(b);