const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser')
const passport = require('passport');

const routes = require("./routes/routes");

const app = express();

// DB config
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
    console.log("Connected to DataBase");
});
mongoose.connection.on("error", (err) => {
    console.error(`Failed to connected to DataBase: ${err}`);
});

// Middelware
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Routes
app.use("/api/routes", routes);

// Errors
app.use((req, res, next) => {
    res.status(404).send({
        error: "Not found"
    })
    next();
})

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const error = err.message || 'Error processing your request';
  
    res.status(status).send({
      error,
    });
  });

module.exports = app;