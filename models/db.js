var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/mtlist");

var employeeSchema= new mongoose.Schema({
	name:{type:'string'},
	email:{type:'string',unique:true},
	dob:{type:'string'},
	dept:{type:'string'},
	gender:{type:'string'},
	age:{type:'string'}
});

var Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee;