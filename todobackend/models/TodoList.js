module.exports = (sequelize,DataType) => {
    const model = sequelize.define('todoList',{
        task : {
            type : DataType.STRING(255)
        }
    },{
        tableName : 'todolists',
        timestamps : false,
    })
    model.associate = models => {
        model.belongsTo(models.User,{foreignKey: 'user_id'})
    }
    return model
}