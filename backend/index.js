const app = require('./app');
const dotenv = require('dotenv');

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});

dotenv.config({ path: ".env" });

const connectDB = require('./DB/db');
connectDB();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
})