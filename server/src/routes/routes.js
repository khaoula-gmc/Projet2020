const express = require("express");
const passport = require('passport');
const router = express.Router();

const moeController = require("../controllers/moe.controller");
const produitController = require("../controllers/produit.controller");
const serviceController = require("../controllers/service.controller");

const activiteMoeController = require("../controllers/activiteMoe.controller")
const typeProduitController = require("../controllers/typeProduit.controller")
const typeServiceController = require("../controllers/typeService.controller")

// Auth and register
router.post('/register', moeController.register);
router.post('/login', moeController.login);
router.get('/moe', moeController.get);
router.get('/produits',produitController.getAll)
router.get('/services',serviceController.getAll)

router.get('/activite-moe', activiteMoeController.get);
router.get('/type-produit', typeProduitController.get);
router.get('/type-service', typeServiceController.get);

// Customize and protect the routes
router.all('*', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, moe) => {
        if(err || !moe) {
            const error = new Error('You are not authorized to access');
            error.status = 401;
            throw error;
        }
        
        req.moe = moe;
        return next();
    })(req, res, next);
});

// Protected routes
router.get('/profile', moeController.getProfile);
router.put('/moe/:_id', moeController.update);
router.delete('/moe/:_id', moeController.delete);

router.get('/service', serviceController.get);
router.post('/service', serviceController.create);
router.put('/service/:_id', serviceController.update);
router.delete('/service/:_id', serviceController.delete);

router.get('/produit', produitController.get);
router.post('/produit', produitController.create);
router.put('/produit/:_id', produitController.update);
router.delete('/produit/:_id', produitController.delete);

module.exports = router;