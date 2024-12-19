const { User } = require("../models/Account")

class HomeController {
    home(req, res, next) {

        
        if (!req.isAuthenticated()) {
            return res.render("home", { login: false})
        } else {
            const id = req.session.passport.user
            User.findById(id)
                .then(user => {
                    const admin = false;
                    if (user.role == "admin") {
                        admin == true;
                    }else {
                        admin == false;
                    }
                    
                    return res.render("home", { login: true, userName: user.username, admin: admin })
                })
                .catch(next)
        }


    }
}


module.exports = new HomeController();