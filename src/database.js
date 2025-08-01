const mongoose = require('mongoose'); // importamos Mongoose para la conexión a MongoDB

mongoose.connect('mongodb://localhost/mean-employees',{
    useUnifiedTopology: true,
    useNewUrlParser: true})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err)); // manejamos errores de conexión 