// let str = 'hi hi hi hi hi'
// let posFind = (x,y) => {
//     let a = str.split(' ');
//     let c = a[a.length - 1].length + a[a.length - 2].length;
//     let pos = str.indexOf(y, str.length - c - 2);//trừ hai vì trừ đi hai kí tự khoảng trắng giữa hai vị trí
//     console.log(pos);
// }
// posFind(str, 'hi');
let xx = "NguyeN THI tho tHu hA"
let expect = "Nguyen Thi Tho Thu Ha";
xx = xx.toLowerCase().trim()
console.log("Before =>"+ xx +"<=")
for (let i = 0; i< xx.length ; i++){
    if(i == 0 || xx[i-1] == " "){
      //replace character at position i to Uppercase
      // xx[i] = xx[i].toUpperCase()
    //xx = xx.replace(xx[i], xx[i].toUpperCase());
      xx =  xx.slice(0, i) +  xx[i].toUpperCase()+ xx.slice(i + 1) ///
    }
}
  console.log("after =>" + xx + "<=")
// let a='aa'
// console.log(a.slice(0,4));
