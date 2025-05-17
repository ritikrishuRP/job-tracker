module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Job', {
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      applicationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('applied', 'interviewed', 'offered', 'rejected'),
        allowNull: false,
        defaultValue: 'applied',
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      resumeUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      coverLetterUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  };
  