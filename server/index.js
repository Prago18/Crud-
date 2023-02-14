const express = require("express");
const app = express();                // in backend using express server for handling request and response

app.listen(5000, () =>{
    console.log("server is running 5000");    // express server listening to the port 5000
})

const mysql = require("mysql");   // requiring "mysql" for communicating with mysql database

const cors =  require ("cors"); // To share the data between two different ports. why? our react app running in different port

app.use(cors());
app.use(express.json()); // passing the data in json format


const db = mysql.createConnection({     // creating connection with mysql database and giving the access to the variable "db"

    host:"localhost",
    user:"root",
    password:"12345sS$",
    database:"react"
})


//GET
app.get("/api/get",(req,res)=>{
    
    db.query ("SELECT * FROM node", (error,result)=>{
        res.send(result);
    })
})



//CREATE
app.post("/api/post", (req,res) => {
    const {name, email, contact} = req.body;
  
    db.query("INSERT INTO node (name, email, contact) VALUES (?,?,?) ", [name, email, contact] , (err, result) => {
        if (err){
            console.log(err);

           }
    })
})



//READ
app.get("/api/get/:id",(req,res)=>{
    
    const {id} = req.params;

    db.query ("SELECT * FROM node WHERE id = ?",id, (err,result)=>{
        if(err){
            console.log(err)
        }
        res.send(result);
    })
})


//UPDATE
app.put("/api/update/:id",(req,res)=>{
    const {id} = req.params;

    const {name, email, contact} = req.body;

    db.query ("UPDATE  node SET name = ?, email=?, contact=? WHERE id=?",[name, email, contact, id], (error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
})



//DELETE
app.delete("/api/remove/:id", (req,res) => {

    const {id}= req.params;
    
    db.query("DELETE FROM node WHERE id = ?", id, (err, result) => {
        if (err){
            console.log(err);

           }
    })
})




