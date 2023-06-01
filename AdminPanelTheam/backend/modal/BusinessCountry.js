const mongoose = require('mongoose');

const BusinessCountrySchema = new mongoose.Schema({
    CountryName:{
        type: String,
      
    },

    Currency:{
        type: String,
    
    },

    CurrencySymbol:{
        type: String,
      
    },
    Status:{
        type: String,
      
    }
})

module.exports = mongoose.model('AddBusinessCountry',BusinessCountrySchema); 

