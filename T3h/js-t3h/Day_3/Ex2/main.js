function max(a)
{
    let Max=a[0];
    for(let i=0; i<a.length; i++)
    {
        if(Max < a[i])
        {
            Max=a[i];
        }
    }
    return Max;
}

function min(a)
{
    let Min=a[0];
    for(let i=0; i<a.length; i++)
    {
        if(Min > a[i])
        {
            Min=a[i];
        }
    }
    return Min;
}

function average(a)
{
    return (min(a)+max(a))/2;
}
const a=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
console.log("số lớn nhất trong mảng là:" + max(a))
console.log("số nhỏ nhất trong mảng là:" + min(a))
console.log("số trung bình trong mảng là:" + average(a))