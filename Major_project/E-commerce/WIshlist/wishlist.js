let data = JSON.parse(localStorage.getItem('wishdata'))
let main=document.getElementById('main-block')

data.forEach(element =>{
    let subdiv=document.createElement('div')
    subdiv.innerHTML=`
    <img src=${element.image}>
    <h2>${element.title}</h2>
    <p>Price: $${element.price}</p>
    <div>
    <button>Remove Item</button>
    </div>`
    main.appendChild(subdiv)
});