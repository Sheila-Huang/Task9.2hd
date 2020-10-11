const express=require("express")
const bodyParser=require("body-parser")
const mongoose = require('mongoose')
const cors=require("cors")
const Script=require('./models/Note')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

const DB_URL = 'mongodb://localhost:27017/iCrowdTaskDB';
mongoose.connect(DB_URL,{ useNewUrlParser: true ,useUnifiedTopology:true});

// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use('*', function(req, res, next) {
    //replace localhost:8080 to the ip address:port of your server
    res.setHeader('Content-type','application/json;charset=utf-8')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next(); 
    });



app.post('/request',(req,res)=>{
    
    const trans=new Script({
        noteLine:req.body,
    
    })
    trans.save()
    .catch((err)=>console.log(err))
    res.json(('saved to db:'+trans))
    console.log(req.body)
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfullly!")
})