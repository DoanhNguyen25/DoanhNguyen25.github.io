"strict"
const grid = document.querySelector('.grid')
const cardTemplate = document.getElementById('card-template')
for (let i = 0; i < 100; i++) {
    grid.append(cardTemplate.content.cloneNode(true))
  }
const getData = ()=>{
    try {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts =>{
            if(posts){
                grid.innerHTML = '';
                posts.forEach(post => {
                    const div = cardTemplate.content.cloneNode(true)
                    div.querySelector('[data-title]').textContent = post.title
                    div.querySelector('[data-body]').textContent = post.body
                    grid.append(div)
                })
            }
            else{
                console.log("fetch fails")
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}
getData()