# Tutorial 5

    **Author** \
    Name: Jinay Shah \
    Banner ID: B00928737 \
    Email ID: jn851778@dal.ca \
    Date Created: 10 Mar 2024 \
    Last Modification Date: 10 Mar 2024

## Links

- Tutorial 5  Application deployed on Render URL: [https://shah-jinay-tutorial-5.onrender.com/] (https://shah-jinay-tutorial-5.onrender.com/)

- Tutorial 5  Application code on GitLab URL : [https://git.cs.dal.ca/jinays/csci-5709-tutorials/-/tree/main/Tutorial5?ref_type=heads](https://git.cs.dal.ca/jinays/csci-5709-tutorials/-/tree/main/Tutorial5?ref_type=heads)

## Testing

For the testing of the assignment, I started the webapp in my local machine in postman then when everything was working fine, I tested it on the browser while deploying it on Netlify.

## Deployment

1. First of all, I Cloned my `CSCI 5709 Tutorials` repository to my local machine.
2. Then, I created a new project with the following command in [Node.js](https://nodejs.org/en) using `npm init` command.
3. Afterwards, I pushed my tutorial5 project to my GitHub account repository.
4. I deployed my app on [Render](https://render.com/).
5. I created a `README.md` file and pushed it to the gitlab repository.

## Built With

* [Node.js](https://nodejs.org/en) - The web framework used
* [Render](https://render.com/) - Hosting platform used

## Sources Used

I used the below sources for implementing the code for my Backedn api (GET, POST, PUT) in Tutorial-5.

### 1. app.js

*Lines 7-77*

```
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
```
The code above was created by adapting the code from [tutotialspoint](https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm) as shown below:

```
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({  extended: true }));


app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
     res.end( JSON.stringify(user));
   });
})

var bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({  extended: true }));

app.post('/', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = req.body.user4;
      users["user"+user.id] = user
      res.end( JSON.stringify(users));
   });
})

app.put("/:id", function(req, res) {
      fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      
      var users = JSON.parse( data );
      var id = "user"+req.params.id;
      
      users[id]=req.body;
      res.end( JSON.stringify(users));
   })

})
var server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})

```

- The code was implemented by me for creating the REST API  for my tutorial5 in CSCI-5709. I was going through the internet for how to create Api in Node.js framework. Then, I found this site where REST Api is created in Node.js. So i took reference of [tutotialspoint](https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm)

- The given [tutotialspoint](https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm)'s  code was used as a reference to learn how to create REST API's and send/receive data with server.