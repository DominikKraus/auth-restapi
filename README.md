# Authentication RestAPI

You can use this RestAPI to make a simple registration or login page on your frontend.
Customize the code like you want!

Discord: [Click](https://discord.gg/RnkW8Bm)
Website: [Click](https://dkraus.xyz)

### How to make new public route

```javascript
// localhost:port/api/new » METHOD: GET
const router = require('express').Router();

router.get('/new', (req, res) => {
    res.send('this message is public!');
});

module.exports = router;
```

### How to make a new private route

```javascript
// localhost:port/api/new » METHOD: POST
const router = require('express').Router();
const private = require('./verify.js');

router.post('/new', private, (req, res) => {
    res.send('your private page!');
});

module.exports = router;
```

### How to register

Send a POST request in JSON format to /api/register
Example:
```json
    {
        "name": "Dominik Kraus",
        "email": "mymail@example.com",
        "password": "amazingpassword!"
    }
```
We directly hash the password, save it to your database.
If the password is too short, it returns you an error message. If the email is not an actual email, it returns you an error message too.

### How to login

Send a POST request in JSON format to /api/login
Example:
```json
    {
        "email": "mymail@example.com",
        "password": "amazingpassword!"
    }
```
If the given data is incorrect, we directly send you that the password or email is incorrect.

### Creating Database Connection and providing auth token

Click [here](https://cloud.mongodb.com/) to simply create a new MongoDB Database.
Create a new file in the root folder called `.env` and do it like this:
```
    DB_KEY = mongodb+srv://username:password@cluster0-3wqw5.mongodb.net/test?retryWrites=true&w=majority
    TOKEN = RANDOM_STRING_WITH_RANDOM_CHARACTERS_51235u)($§)
```



#### Have fun!