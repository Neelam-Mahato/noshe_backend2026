const db = require("../config/db");

  const adminDetail= async () => {
    try{ 
      const query = `Select * from admin`;
      const [result] = await db.execute(query);
      return result; 
    
     } catch (error) {
    console.error(' Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
  }

  const verifyLogin= async (payload) => {
    try{ 
      const param = [payload.token, payload.username];
      const query = `Update admin set admin_token = ? where admin_username = ? `;
      const [result] = await db.execute(query, param);
      return result.affectedRows == 1 ? {success:true} : {success: false}; 
     } catch (error) {
    console.error(' Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
  }

  const getParticipants= async (payload) => {
    try{ 
      const query = `Select admin_token from admin`;
      const [result] = await db.execute(query);
      console.log(result[0].admin_token)
      if(result[0].admin_token == null || result[0].admin_token == "" || result[0].admin_token == 'null'){
        return {success:false} 
      }
      else
      {
        const query = `SELECT (SELECT JSON_ARRAYAGG(JSON_OBJECT('name', name,'email_id', email_id,'mobile_no', mobile_no,'registered_date',registered_date)) FROM registered_members) AS participants,
        (SELECT JSON_ARRAYAGG(JSON_OBJECT('name', name,'email_id', email_id,'mobile_no', mobile_no,'registered_date',registered_date)) FROM registered_members WHERE attendance = 1) AS checkedIn;`;
        const [result1] = await db.execute(query);
        return result1;
      }
      
    
     } catch (error) {
    console.error(' Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
  }

  
  const logout= async (payload) => {
    try{ 
      const param = [null, payload.uid];
      const query = `Update admin Set admin_token = ? where admin_uid = ?`;
      const [result] = await db.execute(query, param);
      return result.affectedRows == 1 ? {success:true} : {success: false}; 
    
     } catch (error) {
    console.error(' Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
  }

  module.exports = {
    adminDetail,
    verifyLogin,
    logout,
    getParticipants
};