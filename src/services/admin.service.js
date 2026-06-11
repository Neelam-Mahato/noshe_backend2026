const jwt = require("jsonwebtoken");
const {adminModel} = require("../models/index");

const loginVerify = async(loginData) => {
  try{
        const token = jwt.sign( { memberId: loginData.email_id },process.env.JWT_SECRET,{ expiresIn: '1d' });
        const adminResult = await adminModel.adminDetail(); 
        if(adminResult[0].admin_username == loginData.email_id )
        {
            if(await bcrypt.compare(loginData.password, adminResult[0].admin_password)){
                const verifyData = await adminModel.verifyLogin({password:loginData.password, email_id: loginData.email_id,token:token});
                if(verifyData.success == true)
                    return { success: true,message: "You have logged in successfully"};
                else
                    return { success: true,message: "Some error occurred"};
            }
            else
                return { success: false,message: "You have entered wrong password.Please rectify"};
        }
        else
            return { success: false,message: "You have entered wrong username.Please rectify"};
    }
    catch(error){
        return error;
  }  
}

const getParticipantData = async(loginData) => {
  try{
        const participantData = await adminModel.getParticipants();
        return  participantData;
    }
    catch(error){
        return error;
    }  
}


const logoutSession = async(logoutData) => {
  try{
        const verifyData = await adminModel.logout({admin_id: logoutData.id});
        return  verifyData;
    }
    catch(error){
        return error;
  }  
}

module.exports = {
    loginVerify,
    getParticipantData,
    logoutSession
}