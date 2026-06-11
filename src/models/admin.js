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
      const param = [payload.token, payload.email_id];
      const query = `Update registered_members set admin_token = ? where admin_username = ? `;
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
      const query = `SELECT (SELECT JSON_ARRAYAGG(JSON_OBJECT('name', name,'email_id', email_id,'mobile_no', mobile_no,'registered_date',registered_date)) FROM registered_members) AS participants,
      (SELECT JSON_ARRAYAGG(JSON_OBJECT('name', name,'email_id', email_id,'mobile_no', mobile_no,'registered_date',registered_date)) FROM registered_members WHERE attendance = 1) AS checkedIn;`;
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

  
  const logout= async (payload) => {
    try{ 
      const param = ['', payload.admin_id];
      const query = `Update admin Set admin_token = ? where admin_id = ?`;
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