const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const axios = require("axios");
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3001, () => console.log(`Now listening ${PORT}!`));
});

