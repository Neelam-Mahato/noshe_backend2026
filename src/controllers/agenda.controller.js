const { agendaService } = require('../services');

const agendaDetails = async(req,res) =>{
    try{
        const agendaData = await agendaService.agendaDetailsService();
        return res.status(201).json({ success: true, data: agendaData });
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to retrive agenda details.' });
    }
}

module.exports = {
    agendaDetails
}