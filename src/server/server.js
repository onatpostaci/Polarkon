const db = require("./db");


// const getAll = async () => {
//     const data = await db.query('SELECT * FROM staff_details');
//     console.table(data.rows)
// }
//  getAll();

const express = require("express");
const bodyParser = require("body-parser");

//const usersRoutes = require("./routes/users.js");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//app.use("/people", usersRoutes);
app.get("/", async (req, res) => {
    const data = await db.query('SELECT * FROM staff_details');
    res.send(data.rows);
//     console.table(data.rows)
//res.send("Welcome to the Users API!")
});
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

const getAllEquipment = async () => {
    const res = await db.query("SELECT * FROM equipment");
    return res.rows;
}

getAllEquipment();

module.exports = {
    getAllEquipment: getAllEquipment
}