module.exports = (sequelize,DataType) => {
    const model = sequelize.define('User',{
        username : {
            type: DataType.STRING(200),
            unique : true
        },
        password : {
            type: DataType.STRING(255)
        },
        name: {
            type : DataType.STRING(100)
        }
    })
    model.associate = models => {
        model.hasMany(models.todoList,{foreignKey : 'user_id'})
    }
    return model
}