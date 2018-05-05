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

//api route
app.get('/:character', function(request, response){
    var chosenCharacter = request.params.character; 

    console.log(chosenCharacter); 

    response.end(); 
}); 

//listener
app.listen(PORT, function(){
   console.log("App listening on PORT: " + PORT);  
});