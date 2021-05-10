// Load HTTP module
const http = require("http");
// import * as http from 'http';
const mockServices = require("./mockData.js");
const hostname = "127.0.0.1";
const port = 8080;
console.log("Mock Services are ", Object.keys(mockServices));
// Create HTTP server
const server = http.createServer((req, res) => {

    // Set the response HTTP header with HTTP status and Content type
    const dataIndex = req.url.split('/')
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(getMockData(dataIndex.join(""))));
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

const getMockData = (dataIndex) => {
    return mockServices[dataIndex] ? mockServices[dataIndex] : "No Data Found!";
}