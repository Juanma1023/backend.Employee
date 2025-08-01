const { Router }= require('express'); // importamos el framework Express
const router = Router()

const empleadosCtrl = require('../controllers/empleos.controller.js'); // importamos el controlador de empleos


//CRUD
// CREATE - READ - UPDATE - DELETE

// Rutas para manejar los empleos   
router.get('/', empleadosCtrl.getEmpleados);// manejador de la ruta raíz para empleos
router.post('/', empleadosCtrl.createEmpleados); // manejador de la ruta para crear un nuevo empleado
router.get('/:id', empleadosCtrl.getEmpleado); // manejador de la ruta para obtener un empleado específico por ID
router.put('/:id', empleadosCtrl.updateEmpleados); // manejador de la ruta para actualizar un empleado específico por ID
router.delete('/:id', empleadosCtrl.deleteEmpleados); // manejador de la


module.exports = router; // exportamos el router para que pueda ser utilizado en otros archivos