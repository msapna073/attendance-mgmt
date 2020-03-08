var connection = require('../config/config.js')
var register_controller = {}
register_controller.register = function (req, res) {
    var today = new Date();
    var employees={
         "emp_id":req.body.emp_id,
         "email_id":req.body.email_id,
        "first_name":req.body.first_name,
        "last_name":req.body.last_name,
        "local_address":req.body.local_address,
        "phone":req.body.phone,
        "permanent_address":req.body.permanent_address,
        "emergency_contact":req.body.emergency_contact
        
    }

    console.log(employees)
    
    var a =  connection.query('INSERT INTO emp_registration SET ?',employees, function (error, results, fields) {
      if (error) {
          console.log(a.sql)
          console.log(error)
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
    
}
module.exports = register_controller