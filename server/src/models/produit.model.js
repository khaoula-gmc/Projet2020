const mongoose = require('mongoose');

const { Schema } = mongoose;

const produitSchema = Schema({
  nom: { type: String, required: true},
  type: { type: String, required: true },
  description: { type: String },
  prix: { type: Number },
  photo: { type: String },
  date_ajout: { type: Date, default: new Date() },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Moe'
  }
});

const Produit= mongoose.model('Produit', produitSchema);

module.exports = Produit;