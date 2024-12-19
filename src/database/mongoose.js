const mongoose = require("mongoose");


function connect() {
    mongoose.connect("mongodb://localhost/account")
        .then(() => {
            console.log("Connected success!");
            
        }) 
        .catch(() => {
            console.log("Connect failed");
            
        })
}

module.exports = {connect}
