const mongoose = require('mongoose')

const EmpoyeeSchema = new mongoose.Schema({
    name:String,
    quantidade:String,
    picture:String,

})

mongoose.model("employee",EmpoyeeSchema)
