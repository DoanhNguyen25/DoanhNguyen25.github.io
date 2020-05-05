// const cookingRice= resolve=>{
//     console.log('start cooking rice')
//     setTimeout(()=>
//     {
//         resolve({status:'true', des:'done cooking rice'})
//     }, 2000)
// }
// const  cookingSoup=resolve=>{
//     console.log("done cooking rice")
//     console.log("start cooking soup")
//     setTimeout(()=>{
//         resolve({status: "true", des:"done cooking soup"})
//     }, 3000)
// }
// const cookingFish=resolve=>
// {
//     console.log("done cooking soup")
//     console.log("start cooking fish")
//     setTimeout(()=>{
//         resolve({status: "true", des:"done cooking fish"})
//     }, 3000)
// }
// const p=new Promise(cookingRice)
// p.then(data=>{
//     console.log(data)
//     return new Promise(cookingSoup)
// })
// .then(data=>
// {
//     console.log(data)
//     return new Promise(cookingFish)
// })
// .then(data=>
// {
//     console.log(data)
// })

// const respon= fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed")
// const data=respon.then( async data=>{
//     const myJson= await data.json();
//     console.log(myJson)
// })
async function requestApi(url) {
    const response = fetch(url)
    const data = await response
    const myJson = await data.json()
    console.log(myJson)
}
requestApi("https://api.covid19api.com/summary")

// function requestApi2() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("demo").innerHTML = this.responseText;
//         }
//     };
//     xhttp.open("GET", "https://api.covid19api.com/summary", true);
//     xhttp.send();
// }
// requestApi2()
async function requestApi(url) {
    const response = fetch(url)
    const data = await response
    return data.json()
}

setTimeout(() => {
        requestApi("https://api.covid19api.com/summary").then(data => {
            console.log("Data", data)
            document.getElementById("demo1").innerHTML = data.Global.NewConfirmed;
            document.getElementById("demo2").innerHTML = data.Global.NewDeaths;
            document.getElementById("demo3").innerHTML = data.Global.NewRecovered;
            document.getElementById("demo4").innerHTML = data.Global.TotalConfirmed;
            document.getElementById("demo5").innerHTML = data.Global.TotalDeaths;
            document.getElementById("demo6").innerHTML = data.Global.TotalRecovered;
            
        })
    }, 1000);

    setTimeout(()=>
    {
        document.getElementById("load").style.display ="none";
        document.getElementsByClassName("container")[0].style.display="grid"
    },2000)
















NewConfirmed: 90813
NewDeaths: 4736
NewRecovered: 84595
TotalConfirmed: 3578992
TotalDeaths: 251397
TotalRecovered: 1159713