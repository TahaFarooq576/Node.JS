const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.static('templates'))



app.get('/', (req,res)=>{
    console.log("hello world2")
    res.send('Hello world')
})
//THe request that is used by google chrome by defult is get request
//we can you other request put,post,delete request using express


app.put ('/',(req,res)=>{
    res.send('heelo world put!')
}).delete ('/',(req,res)=>{
    res.send('hello world delete!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})