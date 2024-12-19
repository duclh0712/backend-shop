const { User } = require("../models/Account")
const passport = require("../services/passport-local.service")

class AccountController {
    login(req, res, next) {
        res.render("authenticate/login", {
            layout: "form",
            title: "Login"
        });
    }

    register(req, res, next) {
        res.render("authenticate/register", {
            layout: "form",
            title: "Register"
        })
    }

    registered(req, res, next) {
        const newUser = new User(req.body);

        newUser.save()
            .then(data => {
                console.log(`Created ${data}`);
                return res.redirect("/account/login")
            })
            .catch(next);
    }

    me(req, res, next) {
        passport.authenticate("local",
            {
                successRedirect: "/",
                failureRedirect: "/account/login"
            }
        )(req, res, next)
    }

    logout(req, res, next) {
        req.session.destroy(err => {
            if (err) {return res.render("404")}
            return res.redirect("/")
        })
    }
}

module.exports = new AccountController();