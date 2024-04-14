const { where } = require('sequelize');
const Task = require('../database/models/task.model')
const createTask = async (task) => {
    const newtask = new Task(task);
    try {
        const taskResponse = await newtask.save();
        return taskResponse;
    } catch (error) {
        return error;
    }
}

const taskExistsById = async (id) => {
    const task = await Task.findByPk(id);
    return task;
}

const deleteTask = async(taskId)=>{
    const taskDeleted = await Task.destroy({
        where:{
            task_id:taskId,
        }
    });
    return taskDeleted;
}

const getTaskById = async(taskId)=>{
    const task = await Task.findByPk(taskId);
    const {dataValues} = task;
    if(dataValues){
        return dataValues;
    }
    return task;
}

const getAllTasks = async(userId)=>{
    const tasks = await Task.findAll({
        where:{
            user_id:userId
        }
    });
    return tasks;
}
const updateTask = async(id,task)=>{
    const taskUpdated = await Task.update(task,{
        where:{
            task_id:id,
        }
    })
    return taskUpdated;
}

module.exports = {
    createTask,
    taskExistsById,
    deleteTask,
    getTaskById,
    getAllTasks,
    updateTask
}