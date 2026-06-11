  
  const db = require('../config/db'); 

  const agendaDetails= async (payload) => {
    try{ 
    const params = [payload.track,payload.categories,payload.halls];
    const query = `SELECT session_categories,session_timeline,session_tenure,session_halls, session_day,session_track,session_details,
     IF( COUNT(es.event_session_id) = 0, JSON_ARRAY(), JSON_ARRAYAGG(JSON_OBJECT(
            'speaker_name', es.speaker_name,
            'speaker_designation', es.speaker_designation,
            'speaker_company', es.speaker_company,
            'speaker_image', es.speaker_image ))) AS speakers
    FROM event_session s LEFT JOIN event_session_speakers es ON s.session_id = es.session_id GROUP BY s.session_id;`;
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
    agendaDetails};