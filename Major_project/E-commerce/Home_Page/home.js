let mainblock=document.getElementById('main-block')
let popup=document.getElementById('popup')
let cartdata=[];
let wishdata=[];

let fetchdata=async function(){
    let result=await fetch('https://fakestoreapi.com/products')
    let data=await result.json();
    displaydata(data)
}

fetchdata()
let displaydata=function(data){
    data.forEach(element =>{
        let subdiv=document.createElement('div')
        subdiv.innerHTML=`<img src=${element.image}>
        <h2>${element.title}</h2>
        <p>Price: $${element.price}</p>
        <div>
        <button class='wishbtns' id='w${element.id}'>Add to Wishlist</button>
        <button class='cartbtns' id=${element.id}>Add to Cart</button>
        </div>`
        mainblock.appendChild(subdiv)

        subdiv.addEventListener('click',()=>{
            popup.style.display='flex'
            popup.setAttribute('class', 'popupactive')
            popup.innerHTML=`<div class='popupdiv'>
            <img src=${element.image}>
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <b>Price: $${element.price}</b>
            <button id='closebtn'>Close</button>
            </div>`
            let closebtn=document.getElementById('closebtn')
            closebtn.addEventListener('click',()=>{
                popup.style.display='none'
            })
            
        })

        let cartbtns=document.getElementsByClassName('cartbtns');
        for(let i=0; i<cartbtns.length; i++){
            cartbtns[i].addEventListener('click', (event)=>{
                event.stopPropagation()
                let btnid=parseInt(cartbtns[i].id);
                if(element.id==btnid){
                    let jsondata=localStorage.getItem('ctdata');
                    if(jsondata){
                        cartdata=JSON.parse(jsondata)
                    }
                    cartdata.push(element);
                    localStorage.setItem('ctdata', JSON.stringify(cartdata));
                }
            })
        }

        let wishbtns=document.getElementsByClassName('wishbtns');
        for(let i=0; i<wishbtns.length; i++){
            wishbtns[i].addEventListener('click', (event)=>{
                event.stopPropagation()
                let btnid=parseInt(wishbtns[i].id.slice(1));
                if(element.id==btnid){
                    let jsondata=localStorage.getItem('wishdata');
                    if(jsondata){
                        wishdata=JSON.parse(jsondata)
                    }
                    wishdata.push(element);
                    localStorage.setItem('wishdata', JSON.stringify(wishdata));
                }
            })
        }
    });
}

let prfl = document.getElementById('prfl');
let prflblck = document.getElementById('profile-block')
prfl.addEventListener('click',(e)=>{
    e.preventDefault();
    prflblck.style.display = 'flex'
})

let closebtn = document.getElementById('close')
closebtn.addEventListener('click',()=>{
    prflblck.style.display= 'none'
})

let logoutbtn = document.getElementById('logout')
logoutbtn.addEventListener('click',()=>{
    location.href="../Login_page/login.html"
})

