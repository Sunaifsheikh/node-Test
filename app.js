const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

// // import mongoose from 'mongoose'; 
// const Schema = mongoose. Schema;
//  const postSchema = new Schema({ title: { type: 'String', required: true }, content: { type: 'String', required: true }, slug: { type: 'String', required: true } });
//   let Post = mongoose. model('Post', postSchema);

// importing from the file db.js
// const DBRun = require("./db")
// run().catch(console.dir);

// creating a new database Schema for User
const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/User";

// a database Schema for Users
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("User Database created!");
  db.close();
});


// // creating a collection Named User
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("User");
//     dbo.createCollection("customers", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });


//   let url = "mongodb://localhost:27017/Products";
 // a database Schema for Products
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Products Database created!");
    db.close();
  });
  
  
//   // creating a collection Named Products
//   MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//       var dbo = db.db("Products");
//       dbo.createCollection("Products", function(err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//       });
//     });


    // let url = "mongodb://localhost:27017/Orders";
 // a database Schema for Orders
 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Orders Database created!");
    db.close();
  });
  
  






  // starting home page
app.use("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, "/", "lastTask", "views", "index.html"));
})

app.listen(5000);