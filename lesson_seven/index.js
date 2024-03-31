const { createServer } = require('http'); 
const PORT = 4000; 
const HOST = '127.0.0.1';
const fs = require('fs');

const myServer = createServer((req, res) => { 
    const handleReadFile = (fileLocation, statusCode)=>{ 
         fs.readFile(fileLocation, (error, data) => {  
            res.writeHead(statusCode, { "Content-Type": "text/html"});
            if (error) {
                res.end('something went wrong!')
            } else { 
                res.write(data); 
                res.end();
            }
        });
    }
    if (req.url === '/') {
        handleReadFile('./views/index.html', 200);
    } else if (req.url === '/about') { 
        handleReadFile('./views/about.html', 200);
    } else if (req.url === '/contact') { 
        handleReadFile('./views/contact.html',200)
    } else { 
        handleReadFile('./views/error.html', 404);
    }
});

myServer.listen(PORT, HOST, () => { 
    console.log(`Server running at http://${HOST}:${PORT}`);
});

