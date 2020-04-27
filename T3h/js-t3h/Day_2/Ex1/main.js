let a = (x) => {
    let dem = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            dem++;
        }
    }
    return dem;
}
let str="  hello world"
console.log(a(str));

