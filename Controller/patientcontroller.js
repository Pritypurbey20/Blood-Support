const Patients = require('../model/PatientSchema')

const create_patient = async (req,res) =>{
    const patient = new Patients({
        Name:req.body.Name,
        Email:req.body.Email,
        Discription: req.body.Discription,
        Status: req.body.Status,
        BloodType: req.body.BloodType
    });
    try{
        const savePatient = await patient.save();
        res.send(savePatient)
    }
    catch(error){
        res.status(200).send(error)
    }

}
module.exports = {
    create_patient
}
