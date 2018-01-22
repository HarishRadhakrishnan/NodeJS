var express=require("express");
var bp=require("body-parser");
var Employee = require("./models/db.js");
var route = require("./routes/route.js");

var app=express();
app.use(express.static(__dirname));
app.use(bp.json());
 
app.get("/",route.displayPg);

//Display Employee
app.get("/emplist",route.displayEmp);

//Create
app.post("/emplist",route.create);

//Edit
app.get("/emplist/:id",route.edit);


//Update
app.put("/emplist/:id",route.update);

//Delete
app.post("/emplist/:id",route.remove);

app.listen(3000);
console.log("server is now running on port 3000");
