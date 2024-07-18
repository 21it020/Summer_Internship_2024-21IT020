let fullname = document.getElementById('name');
let email = document.getElementById('e-mail');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let UserData = [];

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let data = localStorage.getItem('UserData');
    if(data){
        UserData = JSON.parse(data);
    }
    UserData.push({fullname: fullname.value, email: email.value, password: password.value});
    localStorage.setItem('UserData', JSON.stringify(UserData));
    location.href = '../Login_Page/login.html';
    

});