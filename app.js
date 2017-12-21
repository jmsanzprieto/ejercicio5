//Parametros para el arranque
var express = require("express"),
app = express(),
bodyParser= require("body-parser"),
methodOverride = require("method-override");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static('/ejercio5'));

var router = express.Router();

router.get('/',function(req,res){
  res.send("Funcionando");
});



//arrancando el servidor
app.use(router);
app.listen(8080, function() {
  console.log("Primer servidor")
});
