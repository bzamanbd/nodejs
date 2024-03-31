const fs = require('fs'); 

// fs.appendFile('demo.text', ' and khulna is a division of bangladesh', (e) => { 
//     if (e) { 
//         console.log(e);
//     }
//     console.log('file write success');
// });


// fs.readFile('demo.text', 'utf-8',(e, data) => {
//     if (e) { 
//        console.log(e);
//     } 
//     console.log(data);
// });


// fs.rename('demo.text', 'demo2.text',(e) => {
//     if (e) { 
//        console.log(e);
//     } 
//     console.log('rename success');
// });

// fs.unlink('demo2.text',(e) => {
//     if (e) { 
//        console.log(e);
//     } 
//     console.log('delete success');
// });

// fs.exists('demo2.text',(result) => {
//     if (result) { 
//        console.log('found');
//     } else { 
//         console.log('not found');
//     }
    
// });

// if (fs.existsSync('demo2.text')) { 
//     console.log('Found');
// } else { 
//     console.log('Not Found');
// }

fs.writeFile('name.txt', 'dhaka,khulna', (e) => { 
    if (e) {
        console.log(e);
    } else {
        console.log('file created');
    }
});
