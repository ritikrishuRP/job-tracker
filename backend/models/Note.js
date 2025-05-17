module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Note', {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      jobId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
  };
  