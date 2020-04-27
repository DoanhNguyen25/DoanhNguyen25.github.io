const a=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
const sum=a.reduce((x,y)=>
{
    return x+y;
},0);
console.log(sum);