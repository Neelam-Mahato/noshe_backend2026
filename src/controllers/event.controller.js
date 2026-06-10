const { eventService } = require('../services');

const registerMember = async(req,res) =>{
    try{
        const registerData = req.body;
        const newRegister = await eventService.registerService(registerData);
        if(newRegister.msg == 0){
            return res.status(500).json({ success: false, message: 'Failed to register member.You are not a member of the company' });
        }
        else if(newRegister.msg == 2){
            return res.status(500).json({ success: false, message: 'Some error occurred. Failed to register member.' });  
        }
        else
            return res.status(201).json({ success: true, data: newRegister });
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to register member.' });
    }
}

module.exports = {
    registerMember
}