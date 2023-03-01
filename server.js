const express = require('express')

const compression = require('compression')
const path = require('path');

const app = express();

app.use(compression())
app.use(express.static(path.join(__dirname,"dist")))
app.length('*' ,(req,res) => {
    res.sendFile(path.join(__dirname,'dist',   'index.html'))
})

app.listen('3001', (err)=> console.log(err)) 