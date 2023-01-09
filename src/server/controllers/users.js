const db = require("../db");

//users array
let users = [];
const getUsers = async (req, res) => {
    const data = await db.query('SELECT * FROM staff_details');
    users = data.rows;
    console.log(`Users in the database: ${users}`);
    res.send(users);
}

const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);
};

const getUser = (req, res) => {
    res.send(req.params.id)
};

const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};


module.exports= {
    getUsers: getUsers,
    getUser: getUser,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser: updateUser
};