const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = Schema({
  nom: { type: String, required: true},
  type: { type: String, required: true},
  description: { type: String },
  date_ajout: { type: Date, default: new Date() },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Moe'
  }
});

const Service= mongoose.model('Service', serviceSchema);

module.exports = Service;