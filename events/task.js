const EventEmitter = require("events")

const emitter = new EventEmitter();

const eventCounts = {
    "login": 0,
    "purchase": 0,
    "profile-update": 0,
    "logout": 0,
}

// Event define or event listener
emitter.on("login", (username) => {
    console.log(`${username} has been logged in successfully`)
    eventCounts.login++;
})

emitter.on("user-purchase", (username, products) => {
    console.log(`${username} has purchased ${products}`)
    eventCounts.purchase++;
})

emitter.on("profile-update", (username, fields) => {
    console.log(`${username} has updated their ${fields}`)
    eventCounts["profile-update"]++;
})

emitter.on("logout", (username) => {
    console.log(`${username} has been logged out successfully`)
    eventCounts.logout++;
})

emitter.on("summary", () => {
    console.log(eventCounts);
})

//  Use for loop to emit events multiple times
const username = "Abhishek";
const products = ["Shoes", "Watch", "Bag"];
const fields = ["Email", "Password", "Phone"];


for (i = 0; i < 5; i++) {
    emitter.emit("login", username);
    emitter.emit("user-purchase", username, products[i % products.length]);
    emitter.emit("profile-update", username, fields[i % fields.length]);
    emitter.emit("logout", username);
}

// // Emmit some events
// emitter.emit("login", "Abhishek")
// emitter.emit("user-purchase", "Abhishek", "Shoes")
// emitter.emit("profile-update", "Abhishek", "Email")
// emitter.emit("logout", "Abhishek")

// Show the summary

emitter.emit("summary")