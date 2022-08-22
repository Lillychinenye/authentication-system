const User = require ('../models/user');
const { validationResult } = require ('express-validator');
const jwt = require ('jsonwebtoken');
const bcrypt = require (‘bcryptjs’);
require (‘dotenv’).config();
const {SECRET} = process.env;

exports.loginUser = async(req,res)=> {
const errors= validationResult(req);
If(!errors.isEmpty())
return res.status(400).json({errors:errors.array()});
const {email,password} = req.body
try {
let user = await User.findOne({email:email})
if(!user) return res.status(400).json({statusCode:400, message: “invalid credential”});

if (!isMatch) return 
res.status (400).json ({statusCode:400 , message:”invalid credential”});
const payload={
user: { 
id: user.id,
}
};
jwt.sign(payload, SECRET, {
expiresIn:36000
}
(err,token) =>{
If (err) throw err
else 
res.json({
statusCode: 200,
message: “Logged in successfully”,
user: {
firstName:user.firstName;
lastName:user.lastName,
email: user.email’
userRole:user.userRole,
isTutor: user.isTutor,
isAdmin:user.isAdmin
};
token
})
}
);
}catch(err){
console.error(err.message);
res.status(500).send(“Server Error”);
}
}
exports.getLoggedInUser= async(req,res)=>
{
try{
const user = await user.findById(req.user.id).Select(“-password”);
res.json({
statusCode: 200,
message:"User gotten successfully”,
user
});
}catch(error){
console.error(err.message);
res.status(500).send(“Server Error!”);
}
}