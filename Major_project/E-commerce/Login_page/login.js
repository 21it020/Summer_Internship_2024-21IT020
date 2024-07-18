let user = JSON.parse(localStorage.getItem('UserData'))

let email = document.getElementById('e-mail')
let password = document.getElementById('password')
let submit = document.getElementById('submit')

submit.addEventListener('click',(e)=>{   
    e.preventDefault()
    let userdata = user.find(element=>email.value === element.email && password.value === element.password);
    if(userdata){
        location.href = '../Home_Page/home.html';
    }
    else{
        alert('User not found')
    }
})