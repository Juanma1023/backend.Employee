const mongoose = require('mongoose'); // importamos Mongoose para la conexión a la base de datos MongoDB
const Schema = mongoose.Schema; // importamos Schema de Mongoose para definir esquemas de datos

const EmpleoSchema = new Schema({
    name: { type: String, required: true }, // nombre del empleo, requerido
    position: { type: String, required: true }, // posición del empleo, requerido
    office: { type: String, required: true }, // oficina del empleo, requerido
    salary: { type: Number, required: true }, // salario del empleo, requerido
    datePosted: { type: Date, default: Date.now } // fecha en que se publicó el empleo, por defecto la fecha actual
    },
    { timestamps: true, // añadimos timestamps para crear y actualizar automáticamente las fechas)
    versionKey: false // desactivamos la versión del documento para evitar conflictos de versiones
});

module.exports = mongoose.model('Empleos', EmpleoSchema); // exportamos el modelo de Empleo para que pueda ser utilizado en otros archivos