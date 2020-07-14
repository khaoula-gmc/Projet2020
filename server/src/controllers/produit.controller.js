const Produit = require('../models/produit.model')

const produitController = {};

// Get all products
produitController.getAll = async (req, res, next) => {
    try {
        const produits = await Produit.find();
        return res.send({
            produits
        })

    } catch (err) {
        next(err);
    }
}

// Get owner products
produitController.get = async (req, res, next) => {
    const { moe } = req;

    const _id = {
        owner: moe._id
    }

    try {
        const moeProduits = await Produit.find(_id);
        return res.send({
            message: `Produits de ${moe.prenom} ${moe.nom}`,
            moeProduits
        })

    } catch (err) {
        next(err);
    }
}

// Create product
produitController.create = async (req, res, next) => {
    const { moe } = req;

    const {
        nom,
        type,
        description,
        prix,
        photo,
        date_ajout,
    } = req.body;

    const newProduit = new Produit({
        nom,
        type,
        description,
        prix,
        photo,
        date_ajout,
        owner: moe
    }); 

    try {
        const produit = await newProduit.save();
        return res.send({
            success: true,
            produit
        });

    } catch (err) {
        next(err);
    }
}

// Delete product
produitController.delete = async (req, res, next) => {
    const { _id } = req.params;

    try {
        const check= await Produit.findOne({_id})
        if(!check.owner.equals(req.moe._id)){
            const err= new Error('Suppression refusée, ce produit ne vous appartient pas!')
            err.status=401
            throw err            
        }

        await Produit.deleteOne({ _id })
        return res.send({
            message: "Produit supprimé"
        })
    } catch (err) {
        next(err);
    }
}

// Update product
produitController.update = async (req, res, next) => {
    const { _id } = req.params;
   
    try {
        const check= await Produit.findOne({_id})
        if(!check.owner.equals(req.moe._id)){
            const err= new Error('Modification refusée, ce produit ne vous appartient pas!')
            err.status=401
            throw err            
        }

        const produitUpdated = await Produit.findOneAndUpdate(
            { _id }, 
            { $set: req.body },
            { new: true }
        )
        return res.send({
            message: "Produit modifié",
            produitUpdated
        })
    } catch (err) {
        next(err);
    }
}

module.exports = produitController;