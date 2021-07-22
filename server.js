// load dependencies
var express = require("express");
var Sequelize = require("sequelize");
var session = require("express-session");
const bcrypt = require('bcrypt');
const db = require('db')
db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
})
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(session(sess));
app.use(express.json());
app.engine('handlebars', hbs.engine);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening ${PORT}`))
});