const { agendaService } = require('../services');

const agendaDetails = async(req,res) =>{
    try{
        const filterData = req.query;
        const agendaData = await agendaService.agendaDetailsService(filterData);
        return res.status(200).json({ success: true, data: agendaData });
    }
    catch (error){
         return res.status(500).json({ success: false, message: 'Failed to retrive agenda details.' });
    }
}

module.exports = {
    agendaDetails
}