const http = require("http");

// web server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to Abhishek Jaiswal PortFolio")
        res.end();
    }

    if (req.url === "/about") {
        res.write("Hi Myself Abhishek Jaiswal, I have done BTech in ECS")
        res.end();
    }

    if (req.url === "/about") {
        res.write("Hi Myself Abhishek Jaiswal, I have done BTech in ECS")
        res.end();
    }

    if (req.url === "/address" ){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Bhayandar, Thane , MAhrashtra</h1>")
        res.end();
    }

}); // bts it is eventEmitter




PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})


