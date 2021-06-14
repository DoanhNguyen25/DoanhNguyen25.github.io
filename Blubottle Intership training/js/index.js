const arr = [1,2,3,4,5]
const [a,b,...c] = arr
console.log(a,b,c)

const course = {
    name:'doanh',
    age:18,
    children:{
        name:'book'
    }
}

const {name , children : {name : childrenName}, price = 1000 } = course
console.log(childrenName,price)

function hello(...param){
    console.log(param)
}
let class1 = {
   female:20,
   male:19
}
