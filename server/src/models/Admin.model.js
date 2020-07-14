const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const adminSchema = Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date_inscription: { type: Date, default: new Date() }
});

adminSchema.pre('save', async function (next) {
    let admin = this;
  //Check if password is not modified
  if (!admin.isModified('password')) {
    return next();
  }

  //Encrypt the password
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(admin.password, salt);
    admin.password = hash;
    next();
  } catch (e) {
    return next(e);
  }
});

adminSchema.methods.isPasswordMatch = (password, hashed, callback) => {
    bcrypt.compare(password, hashed, (err, success) => {
        if(err) return callback(err);
        callback(null, success);
    })
};

adminSchema.methods.toJSON = function() {
    const adminObject = this.toObject();
    delete adminObject.password;
    return adminObject;
};

const Admin= mongoose.model('Admin', adminSchema);

module.exports = Admin;