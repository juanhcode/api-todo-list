const taskService = require('../services/task.service');
const createTask = async (req, res) => {
    const { reminder, notes, priority,location,user_id } = req.body;
    const newTask = {
        reminder, notes, priority,location,user_id
    }
    try {
        const response = await taskService.createTask(newTask);
        if (response?.errors) {
            res.status(400).json({
                status:'BAD REQUEST',
                data: "Ups, vuelve a intentarlo",
            })
        }
        res.status(201).json({
            status:"CREATED",
            data: "Task created",
        })
    } catch (error) {
        res.status(500).json({
            status: 'Error en el servidor',
            data: error
        })
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    const taskExists = await taskService.taskExistsById(id);
    if (!taskExists) {
        return res.status(404).json({
            msg: `No existe la tarea con el id ${id}`
        })
    }
    await taskService.deleteTask(id);
    res.status(200).json({
        msg: `tarea con el id ${id} ha sido eliminado.`
    });

}

const getTask = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const task = await taskService.getTaskById(id);
        if(task){
            res.status(200).json(task);
        }else{
            res.status(400).json({ error: 'Ups, vuelve a intentarlo' });
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
}

const getAllTasks = async (req, res) => {
    const id = req.params.id;
    try {
        const tasks = await taskService.getAllTasks(id);
        if(tasks.length > 0){
            res.status(200).json(tasks);
        }else{
            res.status(200).json({ error: 'No tienes tareas, crea una 😁' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener todos las tareas' });
    }
}

const updateTask = async (req, res) => {
    const id = req.params.id;
    const { reminder, notes, priority,location,user_id } = req.body;
    const newTask = {
        reminder, notes, priority,location,user_id
    } 
    const taskExists = await taskService.taskExistsById(id);
    if (!taskExists) {
        return res.status(404).json({
            msg: `No existe la tarea con el id ${id}`
        })
    }
    await taskService.updateTask(id, newTask);
    res.status(200).json({
        msg: `La tarea ha sido actualizada.`
    });
}

module.exports = {
    createTask,
    deleteTask,
    getTask,
    getAllTasks,
    updateTask
}