
const {agendaModel }= require('../models/index');

const agendaDetailsService = async(filterData) => {
  try{
    const agendaData = await agendaModel.agendaDetails({track:filterData.track, categories:filterData.categories,speakers:filterData.speakers,halls:filterData.halls});
    return  agendaData;
  } 
  catch(error){
    return error;
  }  
}

module.exports = {
    agendaDetailsService
}