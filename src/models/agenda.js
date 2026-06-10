  
  const db = require('../config/db'); 

  const agendaDetails= async (payload) => {
    try{ 
    
    const query = `Select * from event_session s JOIN event_session_speakers es ON s.event_session_id = es.session_id`;
    const [result] = await db.execute(query);
    
    return result; 
     } catch (error) {
    console.error('RegisterMember Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
  }


module.exports = {
    agendaDetails
};