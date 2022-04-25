const Appointment = require("../../Models/Appointments/appointments.js")

const createAppointment = async (newAppointment) => {
    const appointment = new Appointment(newAppointment)
    const saveAppointment = await appointment.save()
    return saveAppointment
}

// const getAllAppointments = async () => {
//     return await Appointment.find({}).exec()
// }

const getAllAppointments = async () => {
    return await Appointment.find({}).exec()
}

const deleteAppointment = async (id) => {
    return await Appointment.findByIdAndDelete(id).exec()
}

module.exports = {
    createAppointment,
    getAllAppointments,
    deleteAppointment
}