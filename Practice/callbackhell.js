
const fs= require("fs")




fs.writeFile("second.txt","Taha is aa good boy!", () => {
    console.log("File writing done successfully!")
    fs.readFile("first.txt",(err,data)=>{

        console.log(err,data.toString())


        //again

        fs.writeFile("second.txt","Taha is aa good boy!", () => {
    console.log("File writing done successfully!")
    fs.readFile("first.txt",(err,data)=>{

        console.log(err,data.toString())

        //again

        fs.writeFile("second.txt","Taha is aa good boy!", () => {
    console.log("File writing done successfully!")
    fs.readFile("first.txt",(err,data)=>{

        console.log(err,data.toString())

        //again

        fs.writeFile("second.txt","Taha is aa good boy!", () => {
    console.log("File writing done successfully!")
    fs.readFile("first.txt",(err,data)=>{

        console.log(err,data.toString())
    })
})
    })
})
    })
})
    })
})