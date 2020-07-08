const jwt = require('jsonwebtoken');

const Moe = require('../models/moe.model')

const moeController = {};
// Register moe
moeController.register = async(req, res, next) => {
    const {
        email,
        password,
        nom,
        prenom,
        nom_societe,
        adresse,
        activite,
        desription,
        date_inscription
    } = req.body;

    const newMoe = new Moe({
        email,
        password,
        nom,
        prenom,
        nom_societe,
        adresse,
        activite,
        desription,
        date_inscription
    });

    try {
        const moe = await newMoe.save();
        return res.send({ moe });
    } catch (err) {
        if(err.code === 11000 && err.name === "MongoError"){
            let error = new Error(`Email (${newMoe.email}) is already taken`)
            next(error);
        }else{
            next(err);
        }
    }
};

// Login moe
moeController.login = async(req, res, next) => {
    // Email, password in request
    const { email, password } = req.body;

    try {
        // Check email and password
        const moe = await Moe.findOne({email});
        if(!moe) {
            res.status(401).send({
                error: `The email ${email} does not found`
            })
            next();
        }

        moe.isPasswordMatch(password, moe.password, (err, matched) => {
            if(matched){
                const secret = process.env.JWT_SECRET;
                const expiration = process.env.JWT_EXPIRATION;

                const token = jwt.sign({ _id: moe._id }, secret, { expiresIn: expiration });
                return res.send({token});
            }

            res.status(401).send({
                error: "Invalid email/password combination"
            });
        });

    } catch (err) {
        next(err)
    }
};

// Get all moe
moeController.get = async(req, res, next) => {
    try {
        const getAll = await Moe.find()
<<<<<<< HEAD
        res.res( {getAll} )
=======
        res.send({ getAll })
>>>>>>> f4ae9cf190a53d6671716c09632af9b9af0a40d1
    } catch (err) {
        next(err);   
    }
}

//Get profile
moeController.getProfile = async(req,res,next) => {
    const {moe} = req
    return res.send({ 
        moe
    });
}

// Update moe
moeController.update = async (req, res, next) => {
    const { _id } = req.params;
   
    try {
        await Moe.findOneAndUpdate(
            { _id }, 
            { $set: req.body }
        )
        return res.send({
            message: "Moe modifié"
        })
    } catch (err) {
        next(err);
    }
}

// Delete moe
moeController.delete = async (req, res, next) => {
    const { _id } = req.params;

    try {
        await Moe.deleteOne({ _id })
        return res.send({
            message: "Moe supprimé"
        })
    } catch (err) {
        next(err);
    }
}

module.exports = moeController;