const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyparser=require('body-parser')

const url='mongodb://localhost/cricDB'

const app=express()
mongoose.connect(url)

const con= mongoose.connection
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
con.on('open',function(){
    console.log("Welcome....!")
})

con.on('open',()=>{
    console.log("Helloooo")
})

app.use(express.json())
const cricrouter=require("./route/routecric")
app.use('/cric',cricrouter)
 
// Connecting to server
var server=app.listen(7000,()=>{
    console.log("Server Connected Successfully")
    var host = server.address().address;  
    var port = server.address().port;  
    console.log('Example app listening at http://%s:%s', host, port); 
})

app.get("/",(req,res)=>{
    res.send("Welcome Sadhvik Reddy...!!")
})
