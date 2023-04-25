// const  dotenv = require("dotenv")
// const mongoose = require('mongoose');
// const express = require ('express');
// const app = express();

// dotenv.config({path:'./config.env'});
// require('./connection/conn');
// const BusinessCountry = require('./modal/BAddBusinessCountrySchema');
// app.use(express.json());

// //********we linkd here router file to ake the router*********//

// app.use(require('./routers/BubbleeRouters'))

// const PORT = process.env.PORT;

// app.listen(PORT,()=>{
//     console.log(`Server is running at the port lno ${PORT}`)
// });
// const  dotenv = require("dotenv")

// const mongoose = require('mongoose')

// dotenv.config({path:'./config.env'});

// app.use (bodyparser.json())


// mongoose.connect ('mongodb+srv://Aman_Mohadikar:V5FW1Y8X6b2pIiud@cluster0.gdww84s.mongodb.net/project-2%22',{
//   usenewUrlparser:true
// })

// .then (()=>console.log("mongoDB is connected"))
// .catch (err=> console.log(err))
// const express = require ('express')
// const cors = require ('cors')
// const app= express()
//  app.use(cors())


// const PORT = process.env.PORT || 3000;


// app.listen(PORT,()=>{
//     console.log(`Server is running at the port lno ${PORT}`)
// });


const express = require('express');
const bodyParser = require('body-parser');
const route = require("./routers/BubbleeRouters");
const mongoose = require('mongoose');
const app = express();
const multer= require("multer");
const cors = require('cors');


app.use(multer().any())
app.use(cors())

app.use(bodyParser.json());
app.use(require('./routers/BubbleeRouters'))
app.use(express.urlencoded({extended:false}));

mongoose.connect("mongodb+srv://kakarot:7r9d5ckARYXY2cDi@cluster0.ecdqowc.mongodb.net/group47database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route);


app.listen(  5000, function () {
    console.log('Express app running on port ' + ( 5000))
});