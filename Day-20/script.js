
let inputs = document.querySelectorAll('input');
let display = document.querySelector('#userData tbody');
let errorMessage = {};

let user = {};
let users = [];

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        let { name, value } = e.target;
        user = { ...user, [name]: value }
    })
})

const getUserData = () => {
    if(!validation()) return;

    users.push({ ...user, id: Date.now() });
    displayData();
}

const validation = ()=>{
    let error = {}

    if(!user.email) error.email = `email is reuqired.`;
    if(!user.password) error.password = `password is required.`;

    console.log(error);    
    return Object.keys(error).length == 0;
}

const displayData = () => {
    console.log(users);
    display.innerHTML = '';
    users.forEach((value, index) => {
        let { email, password, id } = value;
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>
                <button onclick="" class="btn btn-danger">Delete</button>
                <button onclick="" class="btn btn-warning">edit</button>
            </td>
        `
        display.append(row);
    })
}

displayData();