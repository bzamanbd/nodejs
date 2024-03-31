const { createServer } = require('http'); 
const HOST = '127.0.0.1'; 
const PORT = 5000; 
const myServer = createServer((req, res) => { 
    res.writeHead(202,{'Content-Type': 'text/html'})
    res.write('<h1>Hello Dhaka</h1>'); 
    res.end();
});
myServer.listen(PORT, HOST, () => { 
    console.log(`server running at http://${HOST}:${PORT}`);
})
