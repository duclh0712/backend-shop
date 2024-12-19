const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

const path = require("path")
const handlebars = require("express-handlebars");


const passport = require("./services/passport-local.service")
const session = require("express-session")
const cookieParser = require("cookie-parser")


// routes
const { route } = require("./route")
const { connect } = require("./database/mongoose")
connect();

// config handlebars
app.engine(".hbs", handlebars.engine({
    extname: ".hbs"
}))

app.use(express.urlencoded(({extended: true})))
app.use(cookieParser())
app.use(session({
    name: "userToken",
    secret: "my-secret-key",
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 3600 * 24 * 60, secure:false}
}))

app.use(passport.initialize())
app.use(passport.session())
app.set("view engine", ".hbs")
app.set("views", "src/views")
app.use(express.static(path.join(__dirname, 'public')));






route(app);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

})