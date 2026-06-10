
const {agendaModel }= require('../models/index');

const agendaDetailsService = async(registerData) => {
  const agendaData = await agendaModel.agendaDetails();
  
  return  agendaData;
}


module.exports = {
    agendaDetailsService
}