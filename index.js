require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT||3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login' , (req,res) => {
    res.send(`login successful`);
});
app.get('/twitter',(req,res)=>{
    res.send("Welcome to my twitter");
});
app.get('/heading' , (req,res) =>{
    res.send(`<h1>Bhai sahab Gajab</h1>`);
})

app.listen(process.env.PORT , () => {
  console.log(` app listening on port ${port}`);
});