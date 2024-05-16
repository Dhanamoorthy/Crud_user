const UseModel = require('../models/usermodel');

const Deleteuser=(req,res)=>{
    const id=req.params.id

    UseModel.findByIdAndDelete({_id:id})
    .then(use=>res.json(use))
    .catch(err=>res.json(err))
}

module.exports = Deleteuser;