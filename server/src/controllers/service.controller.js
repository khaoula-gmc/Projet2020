const Service = require('../models/service.model')

const serviceController = {};

// Get all servicess
serviceController.getAll = async (req, res, next) => {
    try {
        const services = await Service.find();
        return res.send({
            services
        })

    } catch (err) {
        next(err);
    }
}

// Get owner services
serviceController.get = async (req, res, next) => {
    const { moe } = req;

    const id = {
        owner: moe._id
    }

    try {
        const services = await Service.find(id);
        return res.send({
            message: `Services de ${moe.prenom} ${moe.nom}`,
            services
        })

    } catch (err) {
        next(err);
    }
}

// Add service
serviceController.create = async (req, res, next) => {
    const { moe } = req;

    const {
        nom,
        type,
        description,
    } = req.body;

    const newService = new Service({
        nom,
        type,
        description,
        owner: moe
    }); 

    try {
        const service = await newService.save();
        return res.send({
            success: true,
            service
        });

    } catch (err) {
        next(err);
    }
}

// Delete service
serviceController.delete = async (req, res, next) => {
    const { _id } = req.params;

    try {
        const check= await Service.findOne({_id})
        if(!check.owner.equals(req.moe._id)){
            const err= new Error('Suppression refusée, ce service ne vous appartient pas!')
            err.status=401
            throw err            
        }

        await Service.deleteOne({ _id })
        return res.send({
            message: "Service supprimé"
        })
    } catch (err) {
        next(err);
    }
}

// Update service
serviceController.update = async (req, res, next) => {
    const { _id } = req.params;
   
    try {
        const check= await Service.findOne({_id})
        if(!check.owner.equals(req.moe._id)){
            const err= new Error('Modification refusée, ce service ne vous appartient pas!')
            err.status=401
            throw err            
        }

        const serviceUpdated = await Service.findOneAndUpdate(
            { _id }, 
            { $set: req.body }
        )
        return res.send({
            message: "Service modifié",
            serviceUpdated
        })
    } catch (err) {
        next(err);
    }
}

module.exports = serviceController;