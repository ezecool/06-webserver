const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine

// Parciales
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


// Rutas
app.get('/', function (req, res) {
    res.render('home.hbs', {
        nombre: 'hernan castro abregu'
    });
});

app.get('/about', function (req, res) {
    res.render('about.hbs');
});

// Inicia el servidor
app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));