const express = require('express');
const app = express();

app.use(express.json());
let users = [
    {
        email: "abc@abc.ca",
        firstName: "ABC",
        id: "1710102214320" 
      },
      {
        email: "xyz@xyz.ca",
        firstName: "XYZ",
        id: "1710102227532" 
      }
];

app.get('/users', (req, res) => {
    res.status(200).json({
        message: "Users retrieved",
        success: true,
        users: users
    });
});

app.post('/add', (req, res) => {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
        return res.status(400).json({
            message: "Email and firstName are required",
            success: false
        });
    }

    const newUser = {
        email,
        firstName,
        id: Date.now().toString() 
    };
    users.push(newUser);
    res.status(201).json({
        message: "User added",
        success: true
    });
});

app.put('/update/:id', (req, res) => {
    const { email, firstName } = req.body;
    const userId = req.params.id;

    if (!email || !firstName) {
        return res.status(400).json({
            message: "Email and firstName are required",
            success: false
        });
    }

    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({
            message: "User not found",
            success: false
        });
    }

    users[userIndex].email = email;
    users[userIndex].firstName = firstName;
    res.status(200).json({
        message: "User updated",
        success: true
    });
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({
            message: "User not found",
            success: false
        });
    }
    res.status(200).json({
        success: true,
        user: user
    });
});

module.exports = app;
