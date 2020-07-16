const TypeProduit = require('../models/typeProduit.model')

const typeProduitController = {};

// Get all types 
typeProduitController.get = async (req, res, next) => {
    try {
        const typesProduits = await TypeProduit.find();
        return res.send({
            typesProduits
        })

    } catch (err) {
        next(err);
    }
}



// Create typeProduit
typeProduitController.create = async (req, res, next) => {
    
    const { type } = req.body;

    const newTypeProduit = new TypeProduit({
        type
    }); 

    try {
        const typesProduits = await newTypeProduit.save();
        return res.send({
            success: true,
            typesProduits
        });

    } catch (err) {
        next(err);
    }
}

// Delete type
typeProduitController.delete = async (req, res, next) => {
  
    const { _id } = req.params;

    try {
        await TypeProduit.deleteOne({ _id })
        return res.send({
            message: "type supprimé"
        })
    } catch (err) {
        next(err);
    }
}

// Update type
typeProduitController.update = async (req, res, next) => {
    const { _id } = req.params;
   
    try {
        const typeProduitUpdated = await typeProduit.updateOne(
            { _id }, 
            { $set: req.body }
        )
        return res.send({
            message: "type modifié",
            typeProduitUpdated
        })
    } catch (err) {
        next(err);
    }
}

module.exports = typeProduitController;