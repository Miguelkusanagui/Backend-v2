const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const url = 'mongodb://127.0.0.1:27017/loginmean'

 mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(() =>{
    console.log("connection succesfully!")
 }).catch((err) =>{
    console.log('unsuccesfull connection')
 })

 const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
 });

 module.exports = userSchema;

