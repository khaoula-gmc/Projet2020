const jwt = require('jsonwebtoken');

const Admin = require('../models/admin.model')

const adminController = {};
// Register admin
adminController.register = async(req, res, next) => {
    const {
        email,
        password,
        nom,
        date_inscription
    } = req.body;

    const newAdmin = new Admin({
        email,
        password,
        nom,
        date_inscription
    });

    try {
        const admin = await newAdmin.save();
        return res.send({ admin: admin });
    } catch (err) {
        if(err.code === 11000 && err.name === "MongoError"){
            let error = new Error(`Email (${newAdmin.email}) is already taken`)
            next(error);
        }else{
            next(err);
        }
    }
};

// Login admin
adminController.login = async(req, res, next) => {
    // Email, password in request
    const { email, password } = req.body;

    try {
        // Check email and password
        const admin = await Admin.findOne({email});
        if(!admin) {
            res.status(401).send({
                error: `The email ${email} does not found`
            })
            next();
        }

        admin.isPasswordMatch(password, admin.password, (err, matched) => {
            if(matched){
                const secret = process.env.JWT_SECRET;
                const expiration = process.env.JWT_EXPIRATION;

                const token = jwt.sign({ _id: admin._id }, secret, { expiresIn: expiration });
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
adminController.getAdmins = async(req, res, next) => {
    try {
        const getAll = await Admin.find()
        res.send( {getAll} )
    } catch (err) {
        next(err);   
    }
}

//Get profile
adminController.getProfile = async(req,res,next) => {
    const {admin} = req
    return res.send({ 
        admin
    });
}

// Update admin
adminController.update = async (req, res, next) => {
    const { _id } = req.params;
   
    try {
        const adminUpdated = await Admin.updateMany(
            { _id }, 
            { $set: req.body }
        )
        return res.send({
            message: "Admin modifié",
            adminUpdated
        })
    } catch (err) {
        next(err);
    }
}

// Delete admin
adminController.delete = async (req, res, next) => {
    const { _id } = req.params;

    try {
        await Admin.deleteOne({ _id })
        return res.send({
            message: "Admin supprimé"
        })
    } catch (err) {
        next(err);
    }
}

module.exports = adminController;