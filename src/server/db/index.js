const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12345',
    port: '5432',
});

module.exports= {
    query: (text, params) => (pool.query(text,params)),
};

// const connectDb = async () => {
//     try {
//         const pool = new Pool({
//             user: 'postgres',
//             host: 'localhost',
//             database: 'postgres',
//             password: '12345',
//             port: '5432',
//         });
//         await pool.connect();
//         const res = await pool.query('SELECT * FROM staff_details');
//         console.table(res.rows);
//         await pool.end();
//     } catch (error) {
//         console.error(error);
//     }
// }

// connectDb();