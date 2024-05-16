const UseModel = require('../models/usermodel')


const Postuser =(req,res)=>{
    
    UseModel.create(req.body)
    .then(use=>res.json(use))
    .catch(err=>res.json(err));
};


module.exports = Postuser;