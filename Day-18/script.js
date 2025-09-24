let email = document.getElementById('email');
let password = document.getElementById('password');
let users = JSON.parse(localStorage.getItem('users'));

function getLoginDatt(){
    let user = {
        email : email.value,
        password : password
    }
}