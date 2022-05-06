const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => console.log('Levantando un servidor con Express') 
) ; 

app.use ( express.static( path.join(__dirname, './public')));

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, '/views/home.html')); 
});