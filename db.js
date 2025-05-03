const oracledb = require('oracledb');

const dbConfig = {
    user: 'your_username',
    password: 'your_password',
    connectString: 'localhost/XEPDB1'
};

async function connectDB() {
    try {
        const connection = await oracledb.getConnection(dbConfig);
        console.log('Connected to Oracle Database successfully!');
        return connection;
    } catch (error) {
        console.error('Error connecting to Oracle Database:', error.message);
        throw error;
    }
}

module.exports = connectDB;