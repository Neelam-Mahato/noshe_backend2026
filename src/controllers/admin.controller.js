const { adminService } = require('../services');

const login = async(req,res) =>{
    try{
        const loginDetail = req.body;
        const loginResult = await adminService.loginVerify(loginDetail);
        if(loginResult.success == true)
            return res.status(200).json(loginResult);
        else
            return res.status(500).json(loginResult);
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to login' });
    }
}

const participantDetails = async(req,res) =>{
    try{
        const result = await adminService.getParticipantData();
        return res.status(200).json({ success: true, data: result}); 
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to login' });
    }
}

const logout = async(req,res) =>{
    try{
        const param = req.body;
        const result = await adminService.logoutSession(param);
        if(result.success == true)
            return res.status(200).json({ success: true, message: "Logged out succesfully"}); 
        else
            return res.status(500).json({ success: true, message: "Some error occured"}); 
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to login' });
    }
}

module.exports = {
    login,
    participantDetails,
    logout
}