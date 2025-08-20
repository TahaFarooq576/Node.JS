const express = require('express')
const mongoose = require('mongoose')
let ejs = require('ejs');
const employee=require('./models/schema.js')
const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.set ('view engine','ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

 const getrandom=(arr)=>{
    let rnd=Math.floor(Math.random()*(arr.length-1))
    return arr[rnd]

 }

app.get('/generate',async(req, res) => {

   await employee.deleteMany({})

 let randomname=["Talha","Ahsan","Ahtisham","Tayyab"]
 let randomcity=["fsd","lhr","krachi","Islamabad"]
 let randomlanguage=["Javascript","C++","Python"]

   for (let index = 0; index < 10; index++) {
    let e= await employee.create({
        name:getrandom(randomname),
    salary:Math.floor(Math.random()*22000),
    language:getrandom(randomlanguage),
    city:getrandom(randomcity),
    isManager:(Math.random())>0.5?true:false
    })
    console.log(e)
   }
  res.render('index', req.query);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})