const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./config/db');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded resumes & cover letters
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const companyRoutes = require('./routes/companyRoutes');
const noteRoutes = require('./routes/noteRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Job Application Tracker API is running...');
});

// Import models
const User = require('./models/User')(sequelize, require('sequelize').DataTypes);
const Job = require('./models/Job')(sequelize, require('sequelize').DataTypes);
const Company = require('./models/Company')(sequelize, require('sequelize').DataTypes);
const Reminder = require('./models/Reminder')(sequelize, require('sequelize').DataTypes);
const Note = require('./models/Note')(sequelize, require('sequelize').DataTypes);

// Define model relationships

// User relationships
User.hasMany(Job, { foreignKey: 'userId', onDelete: 'CASCADE' });
Job.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Company, { foreignKey: 'userId', onDelete: 'CASCADE' });
Company.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Reminder, { foreignKey: 'userId', onDelete: 'CASCADE' });
Reminder.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Note, { foreignKey: 'userId', onDelete: 'CASCADE' });
Note.belongsTo(User, { foreignKey: 'userId' });

// Job to Company (optional but useful)
Company.hasMany(Job, { foreignKey: 'companyId', onDelete: 'SET NULL' });
Job.belongsTo(Company, { foreignKey: 'companyId' });

// Job to Reminders
Job.hasMany(Reminder, { foreignKey: 'jobId', onDelete: 'CASCADE' });
Reminder.belongsTo(Job, { foreignKey: 'jobId' });

// Job to Notes
Job.hasMany(Note, { foreignKey: 'jobId', onDelete: 'CASCADE' });
Note.belongsTo(Job, { foreignKey: 'jobId' });

// Sync DB and start server
const PORT = process.env.PORT || 8000;

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Sync failed:', err);
    console.log(err.stack);
  });
