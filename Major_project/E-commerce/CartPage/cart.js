let data = JSON.parse(localStorage.getItem('ctdata'))
console.log(data)
let totalprice=0;
let mainblock=document.getElementById('main-block')
let removebtn=document.getElementById('remove')



data.forEach(element =>{
    let subdiv=document.createElement('div')
    subdiv.innerHTML=`<img src=${element.image}>
    <h2>${element.title}</h2>
    <p>Price: $${element.price}</p>
    <div>
    <button id = "remove">Remove from Cart</button>
    </div>`
    mainblock.appendChild(subdiv)
    totalprice+=element.price
});
removebtn.addEventListener('click', ()=>{
    localStorage.removeItem('ctdata')
    
})

let priceblock=document.getElementById('price-block')
priceblock.innerHTML=`<h1>Total Price: $${totalprice}</h1>
<button id='checkbtn'>CheckOut</button>`
let checkbtn=document.getElementById('checkbtn')
checkbtn.addEventListener('click', ()=>{
    alert('Your Order has been placed Successfully!')
})