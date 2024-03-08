// Require the mysql module
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost', // Change this to your MySQL server host
    user: 'root', // Change this to your MySQL username
    password: 'password', // Change this to your MySQL password
    database: 'mydatabase' // Change this to your MySQL database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// Execute a query
connection.query('SELECT * FROM mytable', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    console.log('Query results:', results);
});

// Close the connection
connection.end((err) => {
    if (err) {
        console.error('Error closing connection:', err);
        return;
    }
    console.log('Connection closed');
});
