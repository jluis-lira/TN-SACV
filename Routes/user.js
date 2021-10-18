const express = require('express');
const user = express.Router();
user.get('/', async (req,res,next)=>{
	//const query = ("SELECT * FROM user");
	//const rows = await db.query(query);
	return res.status(200).json({code:200,message:("Hola")});
});
module.exports = user;