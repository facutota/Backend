const express = require('express');

const app = express();

//app.set('view engine', 'ejs'); si usamos un motor de vistas
app.disable('etag');
app.use('/', express.static('public', {
    etag: false,
}));

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
    //res.render('index');  si usamos un motor de vistas
});

app.listen(3003);