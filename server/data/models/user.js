module.exports = (orm, DataTypes) => {
    const User = orm.define('user', {
            username: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            isEmailConfirmed: {
                type: DataTypes.STRING(64),
                allowNull: false
            }
        }, {timestamps: false}
    )

    return User;
}