const fs = require("fs");
const path = require("path");

const fileName = "Promises.txt"
const filePath = path.join(__dirname,fileName)
const file = __dirname

//  why .then() and .catch() ??
// .then() ensures clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling, making it easy to debug and manage failures.

fs.promises.readdir(file)
.then((data)=>{
// console.log(data)
})
.catch((err)=>{
// console.error(err)
})

fs.promises.readdir(file)
.then((data)=>{
// console.log(data)
})
.catch((err)=>{
// console.error(err)
})

fs.promises.writeFile(filePath,"This is the initail data promises","utf-8")
// .then(console.log("File created successfully"))
.catch((err)=>{
    // console.error(err)
})




fs.promises.appendFile(filePath,"\n This is the updated data promises","utf-8")
.then((data)=>{
    console.log("File updated successfully")
})
.catch((err)=>{
    console.error("Error file handling:",err)
})

fs.promises.readFile(filePath,"utf-8")
.then((data)=>{
    console.log(data)
})
.catch((err)=>{console.error("Error raeding file:",err)})

fs.promises.unlink(filePath)
.then(console.log("File deleted successfully"))
.catch((err)=>{console.error("Error deleting file:",err)})
