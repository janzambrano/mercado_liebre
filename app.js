const express = require('express');
const app = express();
const path = require('path');

const port = process.env.POST || 3000; // esto es para conectar con Heroku

app.listen(port, () => console.log('Levantando un servidor con Express') 
) ; 

app.use ( express.static( path.join(__dirname, './public')));

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/views/home.html')); 
});

app.get('/register', (req, res) => { res.sendFile(path.join(__dirname, '/views/register.html')); 
});

app.get('/login', (req, res) => { res.sendFile(path.join(__dirname, '/views/login.html')); 
});