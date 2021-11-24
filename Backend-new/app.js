var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    Customer = require("./models/customer");
const customer = require("./models/customer");
    Post = require("./models/post");

 
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect("mongodb://localhost/auth_demo_app");
mongoose.connect('mongodb://localhost:27017/ibm-hackathon',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",() => {
    console.log("database connected");
});


var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
 
// app.use(require("express-session")({
//     secret: "Rusty is a dog",
//     resave: false,
//     saveUninitialized: false
// }));
 
// app.use(passport.initialize());
// app.use(passport.session());
 
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
app.get('/', (req,res) => {
    res.render('register');
})
app.get('/post', (req,res) => {
    res.render('addPost');
})
app.get('/addPost', (req, res) => {

    res.render('addPost');
    
    });
app.post('/addCustomer', async (req, res) => {
    const cust=req.body.customer;

    try {
        console.log(req.body)
       //validate req.body data before saving
       const customer = new Customer(req.body.customer);
    //    console.log(cust);
       await customer.save();
       res.status(201).json({success:true, data: customer });
    
        // res.json(customer);
 
    } catch (err) {
       res.status(400).json({success: false, message:err.message});
    }
 });
//  app.post("/customer/:id", function(req, res) {
//     // Create a new note and pass the req.body to the entry
//     db.post.create(req.body)
//       .then(function(dbReview) {
//         // If a Review was created successfully, find one Product with an `_id` equal to `req.params.id`. Update the Product to be associated with the new Review
//         // { new: true } tells the query that we want it to return the updated Product -- it returns the original by default
//         // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//         return db.Product.findOneAndUpdate({ _id: req.params.id }, {$push: {reviews: dbReview._id}}, { new: true });
//       })
//       .then(function(dbProduct) {
//         // If we were able to successfully update a Product, send it back to the client
//         res.json(dbProduct);
//       })
//       .catch(function(err) {
//         // If an error occurred, send it to the client
//         res.json(err);
//       });
//   });

 app.post('/addPost', async (req, res)=>{
 
    try {
       //validate data as required
        console.log(req.body)
       const post = new Post(req.body);
       // book.publisher = publisher._id; <=== Assign user id from signed in publisher to publisher key
       await post.save();
 
       const customer = await Customer.findById({_id: req.customer.id})
       customer.posts.push(post);
       await customer.save();
 
       //return new book object, after saving it to Publisher
       res.status(200).json({success:true, data: post })
 
    } catch (err) {
       res.status(400).json({success: false, message:err.message})
    }
 })

 app.get('/customers', async (req, res) => {
    try {
       const data = await Customer.find()
                                  .populate({path: 'posts', select: 'title workers description'});
       res.status(200).json({success: true, data});
    } catch (err) {
       res.status(400).json({success: false, message:err.message});
    }
 })

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});