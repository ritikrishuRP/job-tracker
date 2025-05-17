module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Reminder', {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      remindAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      jobId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
  };
  