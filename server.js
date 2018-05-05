var express = require("express"); 

var app = express(); 
var PORT = 3000; 

// Data
// ===========================================================
// Data
var characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 60,
    forcePoints: 1350
  }];

//routes
//=============================================================
app.get('/', function(request, response){
    response.send("welcome to the starwars page");

}); 

app.get('/yoda', function(request, response){
    response.json(yoda); 
});

app.get('/darthmaul', function(request, response){
    response.json(darthmaul); 
});

app.listen(PORT, function(){
   console.log("App listening on PORT: " + PORT);  
});