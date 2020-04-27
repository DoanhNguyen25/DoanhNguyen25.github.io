let str = "hello world";
let a = (x) => {
    let str2 = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            str2 = str2 + x[i];
        }
    }
    return str2;
}
console.log(a(str));