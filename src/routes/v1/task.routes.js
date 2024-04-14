const {Router} = require('express');
const router = Router();
const taskController = require('../../controllers/task.controller');
const { validateFields } = require('../../middlewares/validate-fields');
const { check } = require('express-validator');

router.post('',taskController.createTask);
router.delete('/:id',taskController.deleteTask);
router.get('/:id', taskController.getTask);
router.get('/all/:id',taskController.getAllTasks);
router.put('/:id', taskController.updateTask);
module.exports = router;