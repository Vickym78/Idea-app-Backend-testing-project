const express=require('express')
const app=express()

app.use(express.json())
require('./routes/idea.routes')(app)

app.listen(3000,(req,res)=>{
	console.log("Connected to server");
})