const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;

const Moe = require('../models/moe.model');

module.exports = (passport) => {
    let config = {};
    config.secretOrKey = process.env.JWT_SECRET;
    config.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();

    passport.use(new jwtStrategy(config, async (jwtPayload, done) => {
        try {
            const moe = await Moe.findById(jwtPayload._id);
            if(moe) {
                return done(null, moe);
            }else {
                return done(null, false);
            }
        } catch (err) {
            return done(error, false);
        }
    }));
}