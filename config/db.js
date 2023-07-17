const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/loginmean";
const dbURL = require('./properties').DB;


const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      console.log(error);
    }
  };
module.exports = () => {
    mongoose.connect(dbURL, {useNewUrlParser: true})
    .then(() => console.log(`Mongo connected on ${dbURL}`))
    .catch(err => console.log(`Connection has error ${err}`))

    process.on('SIGINT', () => {
        mongoose.connection.close (() =>{
            console.log(`Mongo is disconnected`);
            process.exit(0)
        });
    });
    module.exports = connectToMongo;
}