const passport = require("passport")
const pasport = require("passport")
const localStrategy = require("passport-local").Strategy

const { User } = require("../models/Account")

passport.use(new localStrategy((username, password, done) => {
    User.findOne({ username, password })
        .then(user => {
            console.log(user);
            
            return done(null, user)
        })
        .catch(err => {
            return done(null, err)
        })
}))

passport.serializeUser((user, done) => {
    if (!user) return done(null, err);

    return done(null, user._id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            return done(null, user)
        })
        .catch(err => {
            return done(null, err)
        })
    
})


module.exports = passport;