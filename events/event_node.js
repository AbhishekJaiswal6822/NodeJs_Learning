// Import EventEmitter class
const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// 1. Define an event listener (addListner)
// emitter.on("greet",()=>{
//     console.log(`Heloo Abhishek jaiswal`)
// })

// 2. Trigger (emit) the "greet" 
// emitter.emit("greet")
// hello Abhishek
// greet()

// emitter.on("greet",(username,prof)=>{
//     console.log(`Heloo my name is ${username} and my profession is ${prof} `)
// })

// emitter.emit("greet","Abhishek","Full Stack Dev")

// but its best to take a single argument as an object.

emitter.on("greet",(agrs)=>{
    console.log(`My name is ${agrs.name} and my profession is ${agrs.profession}`)
})

emitter.emit("greet",{name:"Abhishek Jaiswal",profession:"Backend Dev"})