const mongoose = require('mongoose');

const { Schema } = mongoose;

const typeProduitSchema = Schema({
  type: { 
    type: String, 
    required: true,
    unique: true
  }
});



const TypeProduit = mongoose.model('TypeProduit', typeProduitSchema);

module.exports = TypeProduit;