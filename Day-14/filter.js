let users = [
    {
        id:1,
        userName:"pratham",
        passWord:"pratham@123",
        email:"pratham@gmail.com",
    },
    {
        id:2,
        userName:"jarir",
        passWord:"jarir@123",
        email:"jarir@gmail.com",
    },
    {
        id:3,
        userName:"nurul",
        passWord:"nurul@123",
        email:"nurul@gmail.com",
    },
    {
        id:4,
        userName:"shivam",
        passWord:"shivam@123",
        email:"shivam@gmail.com",
    },
]

let data = users.filter(user => user.id != 3  )
 
console.log(data);