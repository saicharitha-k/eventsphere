const oracledb = require('oracledb');

const dbConfig = {
    user: 'your_username',      // Replace with your Oracle username
    password: 'your_password',  // Replace with your Oracle password
    connectString: 'localhost/XE'  // Replace with your Oracle connection string
};

async function testConnection() {
    try {
        const connection = await oracledb.getConnection(dbConfig);
        console.log('Connected to database successfully!');
        await connection.close();
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
}

testConnection();