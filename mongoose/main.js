import express from "express"
import mongoose from 'mongoose';
import { Todoo } from "./models/schema.js"
let conn=await mongoose.connect('mongodb://localhost:27017/Todoo')
const app = express()
const port = 3000





app.get('/', (req, res) => {
    const Todooitem=new Todoo({
        title:"Web dev course",
        desc:"Description of the todo",
        isdone:false
    })
    Todooitem.save()
  res.send('Hello World!')

})


app.get('/a', (req, res) => {
    const Todooitem=new Todoo({
        title:"Web dev course",
        desc:"Description of the todo",
        isdone:false
    })
    Todooitem.save()
  res.json({title:Todooitem.title,desc:Todooitem.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
