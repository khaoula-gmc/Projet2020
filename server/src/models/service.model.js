const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = Schema({
  nom: { type: String, required: true},
  description: { type: String },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Moe'
  }
});

const Service= mongoose.model('Service', serviceSchema);

module.exports = Service;