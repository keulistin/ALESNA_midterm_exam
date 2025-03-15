const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');


const app = express();
const PORT = 3000; // initialize Express application

// setting up the sequelize connection to MySQL database
const sequelize = new Sequelize('database_name', 'username', 'password', { 
  host: 'localhost', 
  dialect: 'mysql', 
  logging: false, 
});


// Create a Sequelize model for a users table with fields id, name, email and status.
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, //need to auto-increment for the id
    primaryKey: true, //table's primary key
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, //must be unique for each user
    validate: {
      isEmail: true,
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active', //the account's active
  },
}, {
  tableName: 'users', 
  timestamps: false, 
});


//Define a route /users that fetches all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users from the database
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Testing the database connection and starting the server
(async () => {
  try {
    await sequelize.authenticate(); //authenticating the database connection
    console.log('Connected to MySQL database successfully.'); 
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)); //if succesful it'll run in this link
  } catch (error) {
    console.error('Unable to connect to the database:', error); //if there's an error
  }
})();