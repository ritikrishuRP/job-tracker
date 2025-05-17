module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Company', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      industry: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      companySize: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
  };
  