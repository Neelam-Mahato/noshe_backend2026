
const {agendaModel }= require('../models/index');

const agendaDetailsService = async(registerData) => {
  try{
    const agendaData = await agendaModel.agendaDetails();
  
    return  agendaData;
  }
  catch(error){
    return error;
  }
  
}


module.exports = {
    agendaDetailsService
}