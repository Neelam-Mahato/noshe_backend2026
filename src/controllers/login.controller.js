const { loginService } = require('../services');

const loginOtp = async(req,res) =>{
    try{
        const loginData = req.body;
        const loginResult = await loginService.loginMember(loginData);
        if(loginResult.success == false)
            return res.status(500).json({ success: false, message: loginResult.message });
        else
            return res.status(200).json({ success: true, message: loginResult.message });

    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to login' });
    }
}

const login = async(req,res) =>{
    try{
        const otpVerify = req.body;
        const verifyResult = await loginService.loginOtpVerify(loginData);
        if(verifyResult.length > 0)
            return res.status(200).json({ success: true, message: "Logged Successfully", data: verifyResult });
        else
            return res.status(500).json({ success: false, message: "Some error occured" });
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to login' });
    }
}

const memberDetails = async(req,res) =>{
    try{
        const param = req.body;
        const result = await loginService.getRegisterData(param);
        return res.status(200).json({ success: true, data: result}); 
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to login' });
    }
}

const logout = async(req,res) =>{
    try{
        const param = req.body;
        const result = await loginService.logoutSession(param);
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
    loginOtp, 
    login,
    memberDetails,
    logout
}