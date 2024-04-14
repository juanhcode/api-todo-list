const { DataTypes } = require('sequelize');
const db = require('../connection');
const User = require('./user.model');
const Task = db.define('task', {
    task_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    reminder: {
        type: DataTypes.TIME,
        allowNull: false
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location : {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'user_id'
        }
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'task'
    }
);

Task.belongsTo(User,{foreignKey:'user_id'});


Task.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    return values;
}

module.exports = Task;