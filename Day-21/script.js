const loginForm = document.getElementById('loginForm');
let email = document.getElementById('email');
let password = document.getElementById('password');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value.trim() === '') {
        document.getElementById(`${email.name}-error`).classList.remove('d-none');
    }

    if (password.value.trim() === '') {
        document.getElementById(`${password.name}-error`).classList.remove('d-none');
    }
});