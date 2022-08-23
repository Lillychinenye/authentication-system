const express = require ('express');
const router = express. Router();
const {check} = require ('express-validator');
const userController = require ('../controllers/usersController');
const auth = require ('../middleware/auth');
router.post('/api/auth/login', 
[
check ("email", "please enter a valid email"). isEmail();
check ("password", "A valid password is required").exists(),
],
usersController.loginUser);
router.get("/api/auth" , auth, userController.getLoggedInUser);
module.exports = router;
