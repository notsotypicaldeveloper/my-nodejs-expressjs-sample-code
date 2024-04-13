// const {readFile, writeFile} = require('fs').promises;
// const start = async() =>{
//     try {
//         const first = await readFile('./content/first.txt', 'utf8');
//         const second = await readFile('./content/second.txt', 'utf8');
//         console.log(first, second);
//         await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME: ${first} ${second}`, {flag: 'a'} );
//     }
//     catch(error) {
//         console.log(error);
//     }
// }



// const {readFile, writeFile} = require('fs');
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async() =>{
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8');
//         const second = await readFilePromise('./content/second.txt', 'utf8');
//         console.log(first, second);
//         await writeFilePromise('./content/result-mind-grenade.txt',`THIS IS AWESOME: ${first + second}` );
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// start();


// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }

// getText('./content/first.txt')
//     .then(result=> console.log(result))
//     .catch(e=> console.log(e));


// const http = require('http');

// const server = http.createServer((req, res)=>{
//     if(req.url == '/') {
//         res.end('Home Page');
//     }
//     if(req.url == '/about') {
//         // Blocking Code !!!
//         for(let i = 0; i < 1000; i++) {
//             for(let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('About Page');
//     }
//     res.end('Error Page');
// });


// server.listen(5000, ()=>{
//     console.log("Server Listening on port 5000....");
// })

// console.log('first task');
// setTimeout(()=> {
//     console.log('second task');
// }, 0)

// console.log('next task')
// setInterval(()=>{
//     console.log('hello world');
// }, 2000);
// console.log("I will be first");
