const http =require('http');
const express = require('express');
const path = require('path');

const app = express();


const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'index'))
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'api'))
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'contact'))
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'about'))
});


app.get('/404',(req,res)=>{
    res.status(404).sendFile(path.join(publicPath,'404.html'))
});

const server = http.createServer(app);


const port =5000;
server.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})

