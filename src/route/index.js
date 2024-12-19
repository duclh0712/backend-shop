const homeRouter = require("./home.route")
const acccountRouter = require("./account.route")
const dashboardRouter = require("./dashboard.route")
function route(app) {
    app.use("/account", acccountRouter)
    app.use("/dashboard", dashboardRouter)
    app.use("/", homeRouter);
}

module.exports = { route }