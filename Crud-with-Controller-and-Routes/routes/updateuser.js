const express = require ('express');
const Updateuser = require('../controller/updatecontroller');

const router =express.Router();


router.put('/:id',Updateuser)

module.exports = router;