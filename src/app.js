const express = require('express'); // importamos el framework Express
const app = express(); // creamos una instancia de la aplicación Express
const morgan = require('morgan'); // importamos Morgan para el logging de peticiones

module.exports = app; // exportamos la aplicación para que pueda ser utilizada en otros archivos

//Configuración del puerto y middlewares
app.set('port', process.env.PORT || 3000); // configuramos el puerto de la aplicación
app.use(morgan('dev')); // usamos Morgan para registrar las peticiones en la consola
app.use(express.json()); // usamos el middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.urlencoded({ extended: false })); // usamos el middleware para parsear el cuerpo de las solicitudes con URL codificada
//Rutas de la aplicación
app.use('/api/empleados',require('./routers/empleos.routes')); // importamos y usamos las rutas de empleos
