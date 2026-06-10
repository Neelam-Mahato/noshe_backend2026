  
  const db = require('../config/db'); 

  const RegisterMember= async (payload) => {
    try{ 
    const queryValues = [payload.name, payload.email_id, payload.mobile_no, payload.message , payload.qr_code, 1];
    const query = `INSERT INTO registered_members(name, email_id, mobile_no, message , qr_code,register_status) VALUES (?, ?, ? ,? , ?, ?)`;
    const [result] = await db.execute(query, queryValues);
    
    if (result.affectedRows === 0) {
      throw new Error('Member registration failed');
    }
    else
        return result.insertId; 
     } catch (error) {
    console.error('RegisterMember Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
  }

  const getMembers= async (payload) => {
    try{ 
    const query = `Select * from members`;
    const [result] = await db.execute(query);
        console.log(result)
        return result; 
     } catch (error) {
    console.error(' Error:', error);

    return {
      success: false,
      error: error.message
    };
  }
  }
  

module.exports = {
    RegisterMember,
    getMembers
};