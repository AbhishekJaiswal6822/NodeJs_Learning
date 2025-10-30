const fs = require("fs");
const path = require("path");



const filename = "test.txt";
const filepath = path.join(__dirname,filename)
console.log(filepath)

const writeFile = fs.writeFileSync(
    filepath,"This is the initial data", "utf-8"
)

console.log(writeFile)

const readFile = fs.readFileSync(filepath,"utf-8")

// console.log(readFile.toString())
// console.log(readFile)

const updateFile = fs.appendFileSync(
    filepath,
    "\n This is the updated data",
    "utf-8"
)

// console.log(updateFile)

// const deleteFile = fs.unlinkSync(
//     filepath
// )

const newPath = "updateFile.txt"
const newFilePath = path.join(__dirname,newPath)

const remaneFile = fs.renameSync(
    filepath,newFilePath
)

console.log(remaneFile)