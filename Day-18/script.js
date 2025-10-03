let email = document.getElementById('email');
let password = document.getElementById('password');
let display = document.querySelector('#tbldata tbody');

let users = JSON.parse(localStorage.getItem('users')) || [];

let editId = null;
email.focus();

const userData = () => {
    if (!email.value.trim() || password.value.trim()) {
        alert("Please fill in both fields!");
        return;
    }
    if (editId === null) {
        let user = { id: Date.now(), email: email.value, password: password.value };
        users.push(user);
    } else {
        users = users.map(user => {
            if (user.id == editId) return { ...user, email: email.value, password: password.value };
            else return user;
        });
    }
    editId = null;

    localStorage.setItem('users', JSON.stringify(users))
    displayData();

    email.value = "";
    password.value = "";
    email.focus();
};




const displayData = () => {
    display.innerHTML = '';
    users.forEach((user, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${user.email}</td>
          <td>${user.password}</td>
          <td>
            <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
            <button class="btn btn-warning" onclick="editUser(${user.id})">Edit</button>
          </td>
        `;
        display.appendChild(row);
    });
};

const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(users));
    displayData();
    email.focus();
};

const editUser = (id) => {
    editId = id;
    let userToEdit = users.find(user => user.id === id) || {};
    email.value = userToEdit.email || "";
    password.value = userToEdit.password || "";

    email.focus();
};

displayData();