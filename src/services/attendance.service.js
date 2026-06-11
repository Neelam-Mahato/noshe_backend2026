
const eventModel = require('../models/event');

const attendanceMember = async(attendanceData) => {
  try{
    const agendaData = await agendaModel.generateAttendance({uid:attendanceData.uid});
    return  agendaData;
  }
  catch(error){
    return error;
  }  
}

module.exports = {
    attendanceMember
}