const TypeService = require('../models/typeService.model')

const typeServiceController = {};

// Get all types 
typeServiceController.get = async (req, res, next) => {
    try {
        const typesServices = await  TypeService.find();
        return res.send({
            typesServices
        })

    } catch (err) {
        next(err);
    }
}



// Create typeService
typeServiceController.create = async (req, res, next) => {
    
    const { type } = req.body;

    const newTypeService = new  TypeService({
        type
    }); 

    try {
        const typeService = await newTypeService.save();
        return res.send({
            success: true,
            type
        });

    } catch (err) {
        next(err);
    }
}

// Delete type
typeServiceController.delete = async (req, res, next) => {
  
    const { _id } = req.params;

    try {
        await TypeService.deleteOne({ _id })
        return res.send({
            message: "type supprimé"
        })
    } catch (err) {
        next(err);
    }
}

// Update type
typeServiceController.update = async (req, res, next) => {
    const { _id } = req.params;
   
    try {
        const typeServiceUpdated = await typeService.updateOne(
            { _id }, 
            { $set: req.body }
        )
        return res.send({
            message: "type modifié",
            typeServiceUpdated
        })
    } catch (err) {
        next(err);
    }
}

module.exports = typeServiceController;