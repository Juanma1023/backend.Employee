
const empleadosCtrl = {} // creamos un objeto para almacenar los controladores
const employee = require('../models/empleos'); // importamos el modelo de empleados


empleadosCtrl.getEmpleados = async (req, res) => {
    // Aquí iría la lógica para obtener los empleados
    const employees = await employee.find(); // buscamos todos los empleados en la base de datos
    res.json(employees); // respondemos con la lista de empleados
};

empleadosCtrl.createEmpleados = async (req, res) => {
    try {
        const newEmployee = await employee.create(req.body);
        newEmployee.save(); // guardamos el nuevo empleado en la base de datos
        res.status(201).json(newEmployee); // responde con el empleado creado
        console.log('Empleado creado:', newEmployee); // mensaje de éxito en la consola
    } catch (error) {
    res.status(400).json({ message: 'Error al crear el empleado', error });
}};

empleadosCtrl.getEmpleado = async(req, res) => {
    try {
        const empleado = await employee.findById(req.params.id); // buscamos el empleado por ID
        if (!empleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' }); // si no se encuentra el empleado, respondemos con un error 404
        }
        res.json(employee); // respondemos con el empleado encontrado
        console.log('Empleado encontrado:', empleado); // mensaje de éxito en la consola
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el empleado', error }); // si ocurre un error, respondemos con un error 500
    }
};

empleadosCtrl.updateEmpleados = async (req, res) => {
    try {
        const uptadeEmployee = await employee.findByIdAndUpdate(req.params.id, req.body)
        if (!uptadeEmployee) {
            return res.status(404).json({ message: 'Empleado no encontrado' }); // si no se encuentra el empleado, respondemos con un error 404
        }
        res.status(200).json(uptadeEmployee); // respondemos con el empleado actualizado
        console.log('Empleado actualizado:', uptadeEmployee); // mensaje de éxito en la consola
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el empleado', error }); // si ocurre un error, respondemos con un error 500
    }
};
empleadosCtrl.deleteEmpleados = async (req, res) => {
    // Aquí iría la lógica para obtener los empleados
    try{
        const delateEmployee = await employee.findByIdAndDelete(req.params.id)
        if (!delateEmployee) {
            return res.status(404).json({ message: 'Empleado no encontrado' }); // si no se encuentra el empleado, respondemos con un error 404
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el empleado', error }); // si ocurre un error, respondemos con un error 500
    }
    res.json({ message: 'Empleado eliminado' }); // respondemos con un mensaje de éxito
    console.log('Empleado eliminado'); // mensaje de éxito en la consola
};

module.exports = empleadosCtrl; // exportamos el módulo para que pueda ser utilizado en otros archivos