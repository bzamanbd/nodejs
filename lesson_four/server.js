const {createServer} = require('http');
const hostname = '127.0.0.1'; 
const port = 4000; 

const myServer = createServer((req, res) => { 
    res.end("<h1> Hello server</h1>");
});
 


myServer.listen(port, hostname, () => {
    console.log(`running at http://${hostname}:${port}`);
})