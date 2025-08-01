require('./database'); // importamos la conexión a la base de datos
const app = require('./app'); // importamos la aplicación Express desde app.js

app.listen(app.get('port'), () => {
    console.log('Server is running on port',app.get('port')); // mostramos un mensaje en la consola indicando que el servidor está corriendo
}); // configuramos el servidor para que escuche en el puerto 3000

