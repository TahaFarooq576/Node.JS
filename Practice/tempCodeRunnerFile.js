
console.log("Start")

fs.writeFile("second.txt","Taha is aa good boy!", () => {
    console.log("File writing done successfully!")
})
console.log("end")