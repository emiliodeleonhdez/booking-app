const Appointment = require("../../Models/Appointments/appointments.js")

const createAppointment = async (newAppointment) => {
    const appointment = new Appointment(newAppointment)
    const saveAppointment = await appointment.save()
    return saveAppointment
}

const getAllAppointments = async () => {
    return await Appointment.find({}).exec()
}

module.exports = {
    createAppointment,
    getAllAppointments
}