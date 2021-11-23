const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Customer = require('./models/customer');

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

app.get('customers', async(req,res)=>{
    const custs = await Customer.find({});
    res.render('customer/index', {custs})
})
app.get('/customers/:id', async(req,res)=>{
    const customer = await Customer.findById(req.params.id);
    res.render('customer/show', {customer});
})
app.get('/customerReg', (req,res) => {
    res.render('customer/customer');
})
app.post('/newCustomer', async(req,res) => {
    const cust = new Customer(req.body.customer);
    await cust.save();
    res.render('home');
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})