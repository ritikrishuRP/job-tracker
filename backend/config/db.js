// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(
//   process.env.DB_NAME,         // e.g., 'jobtracker'
//   process.env.DB_USER,         // e.g., 'root'
//   process.env.DB_PASSWORD,     // e.g., 'yourpassword'
//   {
//     host: process.env.DB_HOST, // e.g., 'localhost'
//     dialect: process.env.DB_DIALECT, // e.g., 'mysql'
//   }
// );

// const db = {};

// db.sequelize = sequelize;  // Add this line
// db.Sequelize = Sequelize;

// // Define models
// db.User = require('../models/User')(sequelize, DataTypes);
// db.Job = require('../models/Job')(sequelize, DataTypes);
// db.Company = require('../models/Company')(sequelize, DataTypes);
// db.Reminder = require('../models/Reminder')(sequelize, DataTypes);
// db.Note = require('../models/Note')(sequelize, DataTypes);

// // Define associations
// db.User.hasMany(db.Job);
// db.Job.belongsTo(db.User);

// db.User.hasMany(db.Company);
// db.Company.belongsTo(db.User);

// db.User.hasMany(db.Reminder);
// db.Reminder.belongsTo(db.User);

// db.User.hasMany(db.Note);
// db.Note.belongsTo(db.User);

// // Export models and sequelize instance
// module.exports = db;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('job_tracker', 'root', 'asunny@121',{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;
