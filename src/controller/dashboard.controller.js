const { User } = require("../models/Account")

class DashBoardController {

    dashboard(req, res, next) {
        if (!req.isAuthenticated()) {
            return res.redirect("/");
        }

        const id = req.session.passport.user;

        User.findById(id)
            .then(user => {
                if (user.role != "admin") {
                    return res.redirect("/")
                }
                return res.render("dashboard/dashboard", { title: "Dashboard", layout: "form" })

            })
            .catch(next)
    }
}

module.exports = new DashBoardController();