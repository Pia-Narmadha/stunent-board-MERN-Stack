const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    
        roll_number:{
            type:Number,
            required : true
        },
        first_name:{
            type:String,
            required : true
        },
        last_name:{
            type:String,
            required : true
        },
        rank:{
            type:Number,
            required : true
        }

});
let student = mongoose.model('info',studentSchema);
module.exports = student;
