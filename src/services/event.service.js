
const QRCode = require('qrcode');
const EventModel = require('../models/event');
const injector = require('../functions/index');

const registerService = async(registerData) => {
  try{
     const { name, mobile_no, email_id, message } = registerData;
    var check = 0;
    const members = await EventModel.getMembers();

    for(var i = 0; i<members.length;i++){
      if(members[i].email_id == email_id && members[i].mobile_no == mobile_no){
        check = 1;
        break;
      }    
    }
    if(check == 1){
        const qrPayload = JSON.stringify({
        name: name,
        mobile_no: mobile_no,
        purpose: "User Verification"
      });
      
      const generatedQr = await QRCode.toDataURL(qrPayload);
      const newRegister = await EventModel.RegisterMember({name: name, mobile_no: mobile_no, email_id:email_id, message:message,qr_code: generatedQr });
      if(newRegister){
        
        await injector.sendQrEmail(email_id, name, generatedQr);
      }
      return { id: newRegister, name, mobile_no, email_id, qrCode: generatedQr ,msg:1};
  }
  else
    return {msg:0}
  }
   catch(error){
        return {msg:2 }
   }
   
}


module.exports = {
    registerService
}