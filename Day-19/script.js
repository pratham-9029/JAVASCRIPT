let email = document.getElementById('email');
let password = document.getElementById('password');
let display = document.querySelector('#tableData tbody')
let users = [];
let id = null;

const userData = () => {
    let user = {
        id: Date.now(),
        email: email.value,
        password: password.value,
    }
    users.push(user);
    displayData();
}


const displayData = () => {
    display.innerHTML = '';
    
    users.forEach((user, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>
            <button class="btn btn-danger" onclick="">Delete</button>
            <button class="btn btn-success" onclick="">Edit</button>
        </td>
        `

        display.appendChild(row);
    });

    
};

displayData();