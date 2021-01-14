const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/user');
const {validateBody, schemas} = require('../helpers/validateroute');



router.route('/createupdateuser')
.put(validateBody(schemas. authSchema),  UsersController.createupdateuser);




module.exports = router;