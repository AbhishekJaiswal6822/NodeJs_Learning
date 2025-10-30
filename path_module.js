// const path = require("path");
import path from "path";


// console.log(__dirname)

const filepath = path.join("school","class","students.txt")
// console.log(filepath)

const parseData = path.parse(filepath)
const resolvedData = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

// console.log({parseData,resolvedData,extname,basename,dirname})

import os from "os";

console.log("platform",os.platform())
console.log("user",os.userInfo())
console.log("CPU architecture",os.arch())
console.log("Free Memory",os.freemem())
