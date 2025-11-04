const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncawait.txt"


const filePath = path.join(__dirname, fileName)

const filePath1 = __dirname

/*
const writeFile = async ()=>{
     try {
        await fs.writeFile(filePath,"This is the initial data----","utf-8")
    } catch (error) {
        
    }
}

const readFolder = async () => {
    try {
        const res = await fs.readdir(filePath1);
        console.log(res)
    } catch (err) {
        console.error(err)
    }
}

writeFile();
readFolder();

*/

const writeFile = async() => {
    try {
        await fs.writeFile(filePath, "This is the initial data!!!!!!", "utf-8");
        console.log("File created successfully!!!!")
    } catch(error) {
        console.error(error)
    }
}

const readFile = async ()=>{
    try {
       const data = await fs.readFile(filePath,"utf-8")
        console.log("File has been read successfully",data)
    } catch (error) {
        console.error(error)
    }
}

const updateFile = async ()=>{
    try {
       await fs.appendFile(filePath,"\n This is the updated new data","utf-8")
        console.log("File has been updated  successfully")
    } catch (error) {
        console.error(error)
    }
}

const deleteFile = async ()=>{
    try {
       await fs.unlink(filePath,"utf-8")
        console.log("File has been deleted  successfully")
    } catch (error) {
        console.error(error)
    }
}

writeFile();
readFile();
updateFile();
deleteFile();

