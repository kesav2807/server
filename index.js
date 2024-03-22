const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("<h1>Welcome</h1>")
})

app.get('/data',(req,res)=>{
   Data.find().then((item)=>res.send(item))
})

app.post('/create',(req,res)=>{
    // console.log(req.body);
    Data.create(req.body).then((item)=>res.send(item))
 })
 
 app.put('/update/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params.id);
    Data.findOneAndUpdate({_id:req.params.id},{$set:req.body},{ new: true }).then(res => console.log(res))
    
 })

 app.delete('/delete/:id',(req,res)=>{
        Data.findOneAndDelete({_id:req.params.id}).then(response => console.log(response))
    })

app.listen(8080,()=>{
    console.log("server started !!!");
});

// connect mongodb
 mongoose.connect("mongodb+srv://kesav2807:Aparna2807@cluster0.4k1tgsi.mongodb.net/SBI").then(()=>{console.log("MongoDB connected!")})
//mongoose.connect("mongodb+srv://Alamelumangai:Alamelumangai@cluster0.myuphpq.mongodb.net/Rvs").then(console.log("MongoDB connected"))

// create a schema

let newSchema = new mongoose.Schema({
                 name : String,
                 email:String,
                 password : String,
                 amount : Number
                })

// model
let Data=mongoose.model('Rvs',newSchema)
// let Data = mongoose.model('mca' , newSchema)

// // create a data for testing

// let data1 = new Data({
//     name :"Rehana Bensha",
//     email:"rehana@gmail.com",
//     password:"12345789",
//     amount : 20000
// })

// data1.save();



