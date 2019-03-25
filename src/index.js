const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//Servidor escuchando
app.listen(app.get('port'), ()=>{
    console.log('servidor en el puerto ', app.get('port'));
})