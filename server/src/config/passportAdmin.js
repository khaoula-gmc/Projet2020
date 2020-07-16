const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;

const Admin = require('../models/admin.model');

module.exports = (passportAdmin) => {
    let config = {};
    config.secretOrKey = process.env.JWT_SECRET;
    config.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();

    passportAdmin.use(new jwtStrategy(config, async (jwtPayload, done) => {
        try {
            const admin = await Admin.findById(jwtPayload._id);
            if(admin) {
                return done(null, admin);
            }else {
                return done(null, false);
            }
        }catch(err) {
            return done(error, false);
        }
    }));
}