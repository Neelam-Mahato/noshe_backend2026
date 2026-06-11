
const eventModel = require('../models/event');
const crypto = require('crypto');
const injector = require('../functions');
const jwt = require('jsonwebtoken');

const loginMember = async(loginData) => {
  try{
    const otp = crypto.randomInt(100000, 999999);
    await injector.sendOtp(otp,loginData.email_id);
    const loginData = await eventModel.checkEmail({otp:otp, email_id: loginData.email_id});
    return  loginData;
  }
  catch(error){
    return error;
  }  
}

const loginOtpVerify = async(loginData) => {
  try{
        const token = jwt.sign( { memberId: loginData.email_id },process.env.JWT_SECRET,{ expiresIn: '1d' });
        const verifyData = await eventModel.verifyOtp({otp:loginData.otp, email_id: loginData.email_id,token:token});
        return  verifyData.length > 0 ? verifyData.map(data => ({...data,token: token})) : verifyData;
    }
  catch(error){
    return error;
  }  
}

const getRegisterData = async(loginData) => {
  try{
    const verifyData = await eventModel.getQr({uid:loginData.uid});
    return  verifyData;
  }
  catch(error){
    return error;
  }  
}


const logoutSession = async(logoutData) => {
  try{
    const verifyData = await eventModel.logout({uid: logoutData.uid});
    return  verifyData;
  }
  catch(error){
    return error;
  }  
}

module.exports = {
    loginMember,
    loginOtpVerify,
    getRegisterData,
    logoutSession
}