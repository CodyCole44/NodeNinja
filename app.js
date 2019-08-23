var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({extended: true});

app.get('/',(req,res) => {
    res.render('index');
})
app.get('/contact',(req,res) => {
    res.render('Contact', {qs : req.query});
})

app.post('/contact',urlencodedParser,(req,res)=>{
    if(!req.body) return res.sendStatus(400);
    console.log(req.body)
    res.render('contact-success', {data: req.body})
})


app.get('/profile/:name',(req,res)=>{
    var data = {age:25, job:'Lame',hobbies:['eating','fishing','games']}
    
    res.render('profile',{person : req.params.name,data:data});
})

app.listen(3000);

