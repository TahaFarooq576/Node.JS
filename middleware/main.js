const express = require('express')
const fs = require ('fs')
const app = express()
const port = 3000

app.use((req,res,next)=>{

    console.log(req.headers)
    req.taha=56
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log("Logged Successfully")
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})


app.use((req,res,next)=>{
    console.log("Logged Successfully2")
    next()
})


app.get('/', (req, res) => {
  res.send('Hello World!' + req.taha)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
