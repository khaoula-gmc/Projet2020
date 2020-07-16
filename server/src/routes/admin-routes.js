const express = require("express");
const passport = require('passport');
const router = express.Router();

const adminController = require("../controllers/admin.controller");
const activiteMoeController = require("../controllers/activiteMoe.controller")
const typeProduitController = require("../controllers/typeProduit.controller")
const typeServiceController = require("../controllers/typeService.controller")





// Auth and register
router.post('/register', adminController.register);
router.post('/admin-login', adminController.login);

// Customize and protect the routes
router.all('*', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, admin) => {
        if(err || !admin) {
            const error = new Error('You are not authorized to access');
            error.status = 401;
            throw error;
        }

        req.admin = admin;
        return next();
    })(req, res, next);
});

// Protected routes

router.get('/admin', adminController.getAdmins);
router.get('/admin-profile', adminController.getAdminProfile);
router.put('/admin/:_id', adminController.update);
router.delete('/admin/:_id', adminController.delete);

router.post('/activite-moe', activiteMoeController.create);
router.get('/activite-moe', activiteMoeController.get);
router.put('/activite-moe/:_id', activiteMoeController.update);
router.delete('/activite-moe/:_id', activiteMoeController.delete);

router.post('/type-produit', typeProduitController.create);
router.get('/type-produit', typeProduitController.get);
router.put('/type-produit/:_id', typeProduitController.update);
router.delete('/type-produit/:_id', typeProduitController.delete);

router.post('/type-service', typeServiceController.create);
router.get('/type-service', typeServiceController.get);
router.put('/type-service/:_id', typeServiceController.update);
router.delete('/type-service/:_id', typeServiceController.delete);

module.exports = router;