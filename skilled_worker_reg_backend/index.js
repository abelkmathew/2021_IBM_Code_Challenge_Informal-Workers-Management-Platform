const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Skilled = require('./models/skilled');

mongoose.connect('mongodb://localhost:27017/ibm-hackathon',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",() => {
    console.log("database connected");
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.render('home')
})

app.get('skilledworker', async(req,res)=>{
    const skilw = await Skilled.find({});
    res.render('skilledworker/index', {skilw})
})
app.get('/skilled worker/:id', async(req,res)=>{
    const skilw = await Skilled.findById(req.params.id);
    res.render('skilledworker/show', {skilw});
})
app.get('/skilledregister', (req,res) => {
    res.render('skilledregister');
})
app.post('/newSkilledWorker', async(req,res) => {
    const skilw = new Skilled(req.body.skilled);
    await skilw.save();
    res.render('home');
    // res.send(req.body)
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})