let productosController = {
    listado: function() {},
    crear: function() {},
    registrarse: function(req , res){
       let htmlPath = path.join(__dirname,'./views/register.html' );
        res.sendFile(htmlPath);
        
    },
    detalleComentrarios: function(){}


};

module.exports = productosController;