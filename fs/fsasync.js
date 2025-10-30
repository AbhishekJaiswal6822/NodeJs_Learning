const fs = require("fs")
const path = require("path")

const fileName = "fsAsync.txt"
const filePath = path.join(__dirname, fileName)

const writeFile = fs.writeFile(
    filePath,
    "This is the initial data",
    "utf-8",
    (err)=>{
        if (err) console.error(err);
        else console.log("File has been saved")
    }
)

const readFile = fs.readFile(
    filePath,
    "utf-8",
    (err,data)=>{
        if (err) console.error(err);
        else console.log(data)
    }
)

const appendFile = fs.appendFile(
    filePath, 
    "\n This is the updated or append data ",
    "utf-8",
    (err)=>{
        if (err) console.error(err)
            else console.log("File has been updated")
    }
)

const deleteFile = fs.unlink(
    filePath,
    (err)=>{
        if (err) console.error(err);
        else console.log("File has been Deleted")
    }
)