const mongoose = require('mongoose');

const { Schema } = mongoose;

const activiteSchema = Schema({
  activite: { 
    type: String, 
    required: true,
    unique: true
  }
  
});



const Activite= mongoose.model('Activite', activiteSchema);

module.exports = Activite;