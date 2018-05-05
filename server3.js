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

//api route (this gives you the whole database)
app.get('/api/characters', function(request, response){
    return response.json(characters); 

}); 

//this gives you a character at a time
app.get('/api/characters/:character', function(request, response){
    var chosen = request.params.character; 
    
    for(var i = 0; i < characters.length; i++){
        if (chosen === characters[i].routeName){
            return response.json(characters[i]); 
        }
    }

    return response.send("no character found"); 
})

//listener
app.listen(PORT, function(){
   console.log("App listening on PORT: " + PORT);  
});