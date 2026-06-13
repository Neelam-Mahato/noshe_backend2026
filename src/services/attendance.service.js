
const eventModel = require('../models/event');

const attendanceMember = async(attendanceData) => {
  try{
    const agendaData = await eventModel.generateAttendance({uid:attendanceData.uid});
    return  agendaData;
  }
  catch(error){
    return error;
  }  
}

module.exports = {
    attendanceMember
}