const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Unskilled = require('./models/unskilled');

mongoose.connect('mongodb://127.0.0.1:27017/ibm-hackathon',{
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

app.get('unskilled', async(req,res)=>{
    const unsk = await Unskilled.find({});
    res.render('customer/index', {unsk})
})
app.get('/unskilled/:id', async(req,res)=>{
    const unskilled = await Unskilled.findById(req.params.id);
    res.render('unskilled/show', {cunskilled});
})
app.get('/unskilledReg', (req,res) => {
    res.render('unskilled/unskilled');
})
app.post('/newunskilled', async(req,res) => {
    const unskl = new Unskilled(req.body.unskilled);
    await unskl.save();
    res.render('home');
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})
