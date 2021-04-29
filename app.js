const express = require('express');
const app = express();
const path= require('path');
/*configuraciones*/
app.use(express.static(path.resolve(__dirname, 'public')));


app.listen(3000, () => {
    console.log('Servidor Corriendo en el puerto 3030')
    //console.log(__dirname);
})
app.get('/', function(req , res){
    let htmlPath = path.join(__dirname,'./views/home.html' );
    res.sendFile(htmlPath);
});

app.get('/register', function(req , res){
    let htmlPath = path.join(__dirname,'./views/register.html' );
    res.sendFile(htmlPath);
});

app.get('/login', function(req , res){
    let htmlPath = path.join(__dirname,'./views/login.html' );
    res.sendFile(htmlPath);
});