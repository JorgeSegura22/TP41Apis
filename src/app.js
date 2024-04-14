const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const bodyParser = require('body-parser'); 


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const genresRouter = require('./routes/apiRouter/apigenresRouter')
const actorRouter = require('./routes/apiRouter/apiActorRouter')
const moviesRouter =require('./routes/apiRouter/apimoviesRouter')
//Aquí pueden colocar las rutas de las APIs


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use('/movies',moviesRouter);
app.use('/actors',actorRouter);


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
