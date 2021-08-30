'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Employee = function(employee){
    this.first_name     = employee.first_name;
    this.last_name      = employee.last_name;
    this.designation    = employee.designation;
    this.status         = employee.status ? employee.status : 1;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};
Employee.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO dap_employees set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Employee.findById = function (id, result) {
    dbConn.query("Select * from dap_employees where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Employee.findAll = function (result) {
    dbConn.query("Select * from dap_employees", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('dap_employees : ', res);  
            result(null, res);
        }
    });   
};
Employee.update = function(id, employee, result){
  dbConn.query("UPDATE dap_employees SET first_name=?,last_name=?,designation=? WHERE id = ?", [employee.first_name,employee.last_name,employee.designation, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Employee.delete = function(id, result){
     dbConn.query("DELETE FROM dap_employees WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Employee;