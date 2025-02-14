const express = require('express');

const app = express();

app.get('/',(req,res)=>{res.send('Hello world');});

app.use((req,res,next)=>{
    console.log(`${req.method}request for ${req.url}`);
    next();
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server is listining on port ${port}`);
});