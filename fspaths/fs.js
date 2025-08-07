console.log("hello world");

const fs= require("fs")
console.log (fs);


//writefilesync is asyncronus behavioue like block houl for next statements;
console.log("file writing start")
 fs.writeFileSync("first.txt","web dev is a beautiful journey for my mind satisfaction")
console.log("file writing end")

//writing file using wrtefile this will not block next statements if the file writig is working


console.log("Start")

fs.writeFile("second.txt","Taha is aa good boy!", () => {
    console.log("File writing done successfully!")
    fs.readFile("first.txt",(err,data)=>{

        console.log(err,data.toString())
    })
})
console.log("end")


// reading files using fs


fs.readFile("first.txt",(err,data)=>{
    console.log(err,data.toString());
})



fs.appendFile("second.txt","\n\n\n i am appending data data in text file",()=>{
    console.log("Data appended successfully!")
})


fs.appendFile("second.txt","\n\n\n i am appending data data in text file",()=>{
    console.log("Data appended successfully!")
})



fs.appendFile("second.txt","\n\n\n i am appending data data in text file",()=>{
    console.log("Data appended successfully!")
})



fs.appendFile("second.txt","\n\n\n i am appending data data in text file",()=>{
    console.log("Data appended successfully!")
})



fs.appendFile("second.txt","\n\n\n i am appending data data in text file",()=>{
    console.log("Data appended successfully!")
})



fs.appendFile("second.txt","\n\n\n i am appending data data in text file",()=>{
    console.log("Data appended successfully!")
})


