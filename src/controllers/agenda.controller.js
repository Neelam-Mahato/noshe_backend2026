const { agendaService } = require('../services');

const agendaDetails = async(req,res) =>{
    try{
        const newRegister = await agendaService.agendaDetailsService();
        return res.status(201).json({ success: true, data: newRegister });
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to register member.' });
    }
}

module.exports = {
    agendaDetails
}