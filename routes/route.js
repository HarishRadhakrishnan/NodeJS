var mongoose=require("mongoose");
var Employee = require("../models/db.js");
exports.displayPg = function(req,res){
	res.send();
};

exports.displayEmp = function(req,res){
	Employee.find(function(error,documents){
		console.log(documents);
		res.send(documents);
	});
};

//create 
exports.create = function(req,res){
	console.log(req.body);
	var emp=new Employee();
	emp.age = req.body.age;
	emp.gender = req.body.gender;
	emp.dept = req.body.dept;
	emp.dob = req.body.dob;
	emp.email = req.body.email;
	emp.name = req.body.name;
	emp.save(function(error,data){
		if(data != null){
			console.log("Record inserted successfully");
			res.json(data);
		}
		else{
			console.log(error);
		}
	});
}

//Edit
exports.edit = function(req,res){
	console.log("I got an edit request");
	var eid=req.params.id;
	Employee.findById({_id:eid},function(error,documents){
		res.send(documents);
	});
}

//Update
exports.update = function(req,res){
	var eid = req.params.id;
    var newEmp = {
        name : req.body.name,
        email : req.body.email,
        dept : req.body.dept,
        gender : req.body.gender,
        age : req.body.age,
        dob : req.body.dob
    };
    Employee.update({ "_id": mongoose.Types.ObjectId(eid)}, newEmp, function (err, data) {
        if (err) {
            console.log('Could not find Employee' , err);
            return "";
        }
        res.send(data);

    });
}

//Delete
exports.remove = function(req,res){
    console.log('Delete Employee');
    var eid=req.params.id;
    Employee.findByIdAndRemove({_id:eid}, function(err,docs) {
        if (err) {
            console.log('Could not delete Employee' , err);
            return "";
        }
        else {
            console.log('Employee Deleted');
            res.json(docs);
        }
    });
}

