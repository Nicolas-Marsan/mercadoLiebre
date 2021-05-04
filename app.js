const express = require('express');
const app = express();
const path= require('path');
const productosController = require('./controllers/productosController.js');
let productos = require('./routes/productos.js');
/*configuraciones*/
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'controllers')));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Corriendo en el puerto 3000')
    //console.log(__dirname);
})

app.get('/register', function(req , res){
    let htmlPath = path.join(__dirname,'./views/register.html' );
    res.sendFile(htmlPath);
});




app.get('/', function(req , res){
    let htmlPath = path.join(__dirname,'./views/home.html' );
    res.sendFile(htmlPath);
});



app.get('/login', function(req , res){
    let htmlPath = path.join(__dirname,'./views/login.html' );
    res.sendFile(htmlPath);
});