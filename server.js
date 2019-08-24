const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');





app.get('/', (req, res) => {

    res.render('home', {

        g_nombre: 'Diego'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {});
});


// app.get('/data', (req, res) => {

//     res.send('Hola Data');
// });


app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${ port }.`);

});