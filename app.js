const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use([logger, authorize]);

// app.use(logger);
// app.use('/api', logger); // all started with /api 

app.get('/', (req, res)=>{
    res.send("Hi there!")
});


app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})



