import fs from "fs/promises"




let a= await fs.writeFile("third.txt","This file is created through fspromises")

console.log(a)


let b=await fs.readFile("third.txt")
console.log(b.toString());


let c= await fs.appendFile("third.txt","\n\n\ni am appended through fsappendfile")
console.log(c)


await fs.appendFile("third.txt","\n\n\ni am appended through fsappendfile")

await fs.appendFile("third.txt","\n\n\ni am appended through fsappendfile")
await fs.appendFile("third.txt","\n\n\ni am appended through fsappendfile")