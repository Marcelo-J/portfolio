const express = require ("express");
const app = express ();
const mongoose = require ("mongoose");
const {MONGO_DB_CONFIG} = require("./config/app.config");
const cors = require('cors');

//CONNECTION TO MONGODB
mongoose.connect(MONGO_DB_CONFIG.DB, {
   useNewUrlParser: true,
   useUnifiedTopology: true

}).then(() => {
    console.log('Connection to MongoDB Successful');
}).catch((error)=> {
    console.log('Error connecting to MongoDB:', error);
});

//Enable Cors
app.use(cors ());

//middleware to parse Json data
app.use(express.json());

//Define a route  a fetch the data
app.use("/api", require("./Router/app.route"));
 

//start the server
app.listen(8000, ()=>{
    console.log("sever started on port 8000");
})