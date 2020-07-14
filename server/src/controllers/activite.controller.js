const Activite = require('../models/activite.model')

const activiteController = {};

// Get all activities
activiteController.get = async (req, res, next) => {
    try {
        const activites = await Activite.find();
        return res.send({
            activites
        })

    } catch (err) {
        next(err);
    }
}



// Create activite
activiteController.create = async (req, res, next) => {
    
    const { activite } = req.body;

    const newActivite = new Activite({
       activite
    }); 

    try {
        const activite = await newActivite.save();
        return res.send({
            success: true,
            activite
        });

    } catch (err) {
        next(err);
    }
}

// Delete activite
activiteController.delete = async (req, res, next) => {
  
    const { _id } = req.params;

    try {
        await Activite.deleteOne({ _id })
        return res.send({
            message: "Activité supprimée"
        })
    } catch (err) {
        next(err);
    }
}

// Update activity
activiteController.update = async (req, res, next) => {
    const { _id } = req.params;
   
    try {
        const activiteUpdated = await activite.updateOne(
            { _id }, 
            { $set: req.body }
        )
        return res.send({
            message: "Activité modifiée",
            activiteUpdated
        })
    } catch (err) {
        next(err);
    }
}

module.exports = activiteController;