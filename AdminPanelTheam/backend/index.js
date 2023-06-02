const express = require('express');
const bodyParser = require('body-parser');
const route = require("./routers/BubbleeRouters");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false); 
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
const multer= require("multer");
const cors = require('cors');

app.use(multer().any())
app.use(cors())

const dotenv = require("dotenv")
dotenv.config()





app.use(bodyParser.json());
app.use(require('./routers/BubbleeRouters'))
app.use(express.urlencoded({extended:true}));


mongoose.connect( process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    // Rest of your code
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });

//mongodb+srv://user:12345@cluster0.0cthosq.mongodb.net/
  
      
app.use('/', route);


app.listen(  process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + ( 5000))
});


