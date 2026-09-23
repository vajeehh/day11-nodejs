const moment = require("moment");
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to My First Node.js Server");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    }
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Contact Page");
    }
    else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const data = {
            name: "Vajeeh",
            course: "Python Full Stack Development",
            day: "Day 11"
        };

        res.end(JSON.stringify(data));
    }
    else if (req.url === "/time") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(moment().format("DD-MM-YYYY HH:mm:ss"));
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});