const express = require('express');
const app = express();
const morgan = require('morgan');


// Configuraciones 
app.set("PORT", 3000);


//Middleware
app.use(morgan("dev"));


//Importamos los Routes
const rutasTareas_view = require('./routes/list-view-router')
const rutasTareas_edit = require('./routes/list-edit-router')


//Agregamos los módulos a express
app.use(express.json());
app.use('/', rutasTareas_view);
app.use('/', rutasTareas_edit);


module.exports = app;