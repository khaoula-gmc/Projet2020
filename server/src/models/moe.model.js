const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const moeSchema = Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nom_societe: { type: String, required: true },
  adresse: { type: String, required: true },
  telephone: { type: Number, required: true },
  activite: { 
    type: mongoose.Schema.Types.ObjectId,
    ref:'Activite',
    required: true 
  },
  description: { type: String },
  date_inscription: { type: Date, default: new Date() }
});

moeSchema.pre('save', async function (next) {
    let moe = this;
  //Check if password is not modified
  if (!moe.isModified('password')) {
    return next();
  }

  //Encrypt the password
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(moe.password, salt);
    moe.password = hash;
    next();
  } catch (e) {
    return next(e);
  }
});

moeSchema.methods.isPasswordMatch = (password, hashed, callback) => {
    bcrypt.compare(password, hashed, (err, success) => {
        if(err) return callback(err);
        callback(null, success);
    })
};

moeSchema.methods.toJSON = function() {
    const moeObject = this.toObject();
    delete moeObject.password;
    return moeObject;
};

const Moe= mongoose.model('Moe', moeSchema);

module.exports = Moe;