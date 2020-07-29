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

// const respon= fetch("https://api.covid19api.com/summary")
// const data=respon.then( async data=>{
//     const myJson= await data.json();
//     console.log(myJson)
// })
// async function requestApi(url) {
//     const response = fetch(url)
//     const data = await response
//     const myJson = await data.json()
//     console.log(myJson)
// }
// requestApi("https://api.covid19api.com/summary")

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
    // console.log(data)
    return data.json()
}
requestApi("https://api.covid19api.com/summary").then(data => {
        console.log("Data", data)
        document.getElementById("demo1").innerHTML = data.Global.NewConfirmed;
        document.getElementById("demo2").innerHTML = data.Global.NewDeaths;
        document.getElementById("demo3").innerHTML = data.Global.NewRecovered;
        document.getElementById("demo4").innerHTML = data.Global.TotalConfirmed;
        document.getElementById("demo5").innerHTML = data.Global.TotalDeaths;
        document.getElementById("demo6").innerHTML = data.Global.TotalRecovered;


        document.getElementById("vn1").innerHTML = data.Countries[181].NewConfirmed;
        document.getElementById("vn2").innerHTML = data.Countries[181].NewDeaths;
        document.getElementById("vn3").innerHTML = data.Countries[181].NewRecovered;
        document.getElementById("vn4").innerHTML = data.Countries[181].TotalConfirmed;
        document.getElementById("vn5").innerHTML = data.Countries[181].TotalDeaths;
        document.getElementById("vn6").innerHTML = data.Countries[181].TotalRecovered;

    })
    
// setTimeout(() => {
    
// }, 3000);

setTimeout(() => {
    document.getElementById("load").style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "grid"
    document.getElementsByClassName("container-vn")[0].style.display = "flex"

    
}, 2000)
