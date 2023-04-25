// const express = require ('express');
// const router = express.Router();
// const mongoose= require('mongoose');


// const BusinessCountry = require("../modal/BAddBusinessCountrySchema");
// mongoose.connect(
//     process.env.Database,
//     {
//         useNewUrlParser:true,
//         useUnifiedTopology: true,
//     },
//     (err)=>{
//         if(err)console.log(err) 
//          else console.log("mongdb is connected");
//   }
// );

//    router.post('/AddBusinessCountry', async(req,res)=>{

//     const {CountryName, Currency, Status} = req.body;
    
//     //*********using validation Form********* */
//     if(!CountryName || !Currency || !Status ) /**Here we start the validation in app */
//     {
//       return res.status(422).json({error:"Please filled the field properly"})
//     }
//       try{
//         const AddBusinessCountry= new BusinessCountry({ CountryName, Currency, Status})//**Here we declare User data to set Automatic invisible */
//         const NewAddBusinessCountry = await AddBusinessCountry.save();
//         if(NewAddBusinessCountry){
//           res.status( 201).json({massage:"Country Added Successfull."});
//           console.log("Data save successfully");
//         }
//         else{
//           res.status( 201).json({message:"Country Register Failed."});
//         } 
//     }
//         catch (err)
//         {
//           console.log(err);
//         }
       
//     }
//     )
//     router.post('/AddBusinessState', async(req,res)=>{

//       const {BusinessState, Currency, Status} = req.body;
      
//       //*********Putt ing validation Form********* */
//       if(!BusinessState || !Currency || !Status ) /**Here we start the validation in app */
//       {
//         return res.status(422).json({error:"Please fill the field properly"})
//       }
//         try{
//           const AddBusinessState= new BusinessState({ BusinessState, Currency, Status})//**Here we declare User data to set Automatic invisible */
//           const NewAddBusinessStat = await AddBusinessState.save();
//           if(NewAddBusinessStat){
//             res.status( 201).json({message:"User Register Successfully"});
//             console.log("Data save successfully");
//           }
//           else{
//             res.status( 201).json({massage:"User Register Failed."});
//           } 
//       }
//           catch (err)
//           {
//             console.log(err);
//           }
         
//       }
//       )

//     module.exports = router;


const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');

// const BusinessCountry = require('../modal/BAddBusinessCountrySchema');
// const BAddBusinessStateSchema = require('../modal/BAddBusinessStateSchema');
const affilSchema = require('../modal/Affliate')

router.post('/CreateAffiliatedPartners',async(req,res)=>{
try
  {const {partnerName, email,mobileNumber,address,coverageState,commission,status
  }= req.body;

  
    const affilate = await affilSchema.create({
      partnerName,email,mobileNumber,address,coverageState,commission,status
    });
    console.log(affilate)
    }
    catch(err){
      console.log(err.message)
    }


  

    
})


const BusinessStateSchema = require('../modal/BusinessState');

router.post('/AddBusinessState', async (req, res) => {
  try {
    const { BusinessState, Country, State, Tax } = req.body;
console.log(req.body)
    // const newBusinessState = new BusinessStateSchema({
    //   BusinessState,
    //   Country,
    //   State,
    //   Tax,
    // });
// console.log(newBusinessState)
    const savedDropdwn = await BusinessStateSchema.create(req.body);
    console.log(savedDropdwn);

    res.status(201).json(savedDropdwn);
  } 

  
   catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message });
  }
});



//GET API


router.get('/AddBusinessState', async (req, res) => {
  try {
       console.log("hello")
    // const newBusinessState = new BusinessStateSchema({
    //   BusinessState,
    //   Country,
    //   State,
    //   Tax,
    // });
// console.log(newBusinessState)
    const savedDropdwn = await BusinessStateSchema.find();
    console.log(savedDropdwn);

    res.status(201).json(savedDropdwn);
  } 

  
   catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message });
  }
});




// BusinessState.find({}, (err, businessStates) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(businessStates)
//   }
// })




// router.post('/AddBusinessCountry', async (req, res) => {
//   const { CountryName, Currency, Status } = req.body;

//   if (!CountryName || !Currency || !Status) {
//     return res.status(422).json({ error: 'Please fill the field properly' });
//   }

//   try {
//     const AddBusinessCountry = new BusinessCountry({
//       CountryName,
//       Currency,
//       Status,
//     });

//     const NewAddBusinessCountry = await AddBusinessCountry.save();

//     if (NewAddBusinessCountry) {
//       res.status(201).json({ message: 'Country Added Successfully' });
//     } else {
//       res.status(201).json({ message: 'Country Register Failed' });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });

// router.post('/AddBusinessState', async (req, res) => {
//   const { BusinessState, Currency, Status } = req.body;

//   if (!BusinessState || !Currency || !Status) {
//     return res.status(422).json({ error: 'Please fill the field properly' });
//   }

//   try {
//     const AddBusinessState = new BAddBusinessStateSchema({
//       BusinessState,
//       Currency,
//       Status,
//     });

//     const NewAddBusinessStat = await AddBusinessState.save();

//     if (NewAddBusinessStat) {
//       res.status(201).json({ message: 'State Added Successfully' });
//     } else {
//       res.status(201).json({ message: 'State Register Failed' });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });



//post addbusinesscountry

const BusinessCountrySchema = require('../modal/BusinessCountry');

router.post('/AddBusinessCountry', async (req, res) => {
  try {
    const { CountryName, Currency, SelectCurrency, Status } = req.body;
console.log(req.body)
    // const newBusinessState = new BusinessStateSchema({
    //   BusinessState,
    //   Country,
    //   State,
    //   Tax,
    // });
// console.log(newBusinessState)
    const savedDropdwn = await BusinessCountrySchema.create(req.body);
    console.log(savedDropdwn);

    res.status(201).json(savedDropdwn);
  } 

  
   catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message });
  }
});





//get api


router.get('/AddBusinessCountry', async (req, res) => {
  try {
       console.log("hello")
   
// console.log(newBusinessState)
    const savedDropdwn = await BusinessCountrySchema.find();
    console.log(savedDropdwn);

    res.status(201).json(savedDropdwn);
  } 

  
   catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message });
  }
});

//POST tax



const TaxSchema = require('../modal/Tax');

router.post('/AddCountryTax', async (req, res) => {
  try {
    const { Country, State, Tax } = req.body;
console.log(req.body)
    // const newBusinessState = new BusinessStateSchema({
    //   BusinessState,
    //   Country,
    //   State,
    //   Tax,
    // });
// console.log(newBusinessState)
    const savedDropdwn = await TaxSchema.create(req.body);
    console.log(savedDropdwn);

    res.status(201).json(savedDropdwn);
  } 

  
   catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message });
  }
});



//get tax

router.get('/AddCountryTax', async (req, res) => {
  try {
    const { Country, State, Tax } = req.body;
console.log(req.body)
    // const newBusinessState = new BusinessStateSchema({
    //   BusinessState,
    //   Country,
    //   State,
    //   Tax,
    // });
// console.log(newBusinessState)
    const savedDropdwn = await TaxSchema.find();
    console.log(savedDropdwn);

    res.status(201).json(savedDropdwn);
  } 

  
   catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message });
  }
});



module.exports = router;