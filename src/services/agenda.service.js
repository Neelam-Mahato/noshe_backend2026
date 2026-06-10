
const {agendaModel }= require('../models/index');

const agendaDetailsService = async(registerData) => {
  const newRegister = await agendaModel.agendaDetails();
  
  return { id: newRegister, name, mobile_no, email_id, qrCode: generatedQr };
}


module.exports = {
    agendaDetailsService
}