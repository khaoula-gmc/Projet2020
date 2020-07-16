const mongoose = require('mongoose');

const { Schema } = mongoose;

const typeServiceSchema = Schema({
  type: { 
    type: String, 
    required: true,
    unique: true
  }
  
});



const TypeService= mongoose.model('TypeService', typeServiceSchema);

module.exports = TypeService;