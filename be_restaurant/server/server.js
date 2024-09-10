const app = require('./index');
const db = require('./config/database');

const PORT = process.env.PORT || 3000;

db.getConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Database connection failed:', error);
});