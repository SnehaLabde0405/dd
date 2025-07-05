const express = require('express');
const app = express();
const ip = require('ip');

app.get('/ping',(req,res) => {
    return res.json({
        message:'pong',
       ServerAddress:ip.address(),
    });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
