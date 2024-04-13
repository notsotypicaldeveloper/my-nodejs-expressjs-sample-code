const express = require("express");
const path = require('path');
const app = express();

// we can give any name to public folder
// setup static and middleware
// static assets means serer dont not changes
app.use(express.static('./public'));

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets
//     server side rendering
// });

app.all('*', (req, res)=> {
    res.status(404).send('<h1>resource not found</h1>');
})


app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})



