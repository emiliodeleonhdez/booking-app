//:)

var express = require("express");
var router = express.Router();
const ObjectID = require("mongodb").ObjectID;
const appointment = require("../usecases/appointments/")

// router.get("/", (req, res, next) => {
//     req.collection
//         .find({}).exec()
//         .toArray()
//         .then((results) => res.json(results))
//         .catch((error) => res.send(error));
// });

router.get("/", async (req, res, next) =>{
  try{
    const allAppointments = await appointment.getAllAppointments()
    res.status(200).json({
      payload: allAppointments
    })
  }catch(error){
    next(error)
  }
})

router.post("/appointments", async (req, res, next) => {
  try{
    const newAppointment = await appointment.createAppointment(req.body)
    res.status(200).json({
      ok: true,
      message: "New appointment created",
      payload: newAppointment
    })
  }catch(error){
    next(error)
  }
})

router.delete("/appointments/:id", async (req, res, next) => {

  const { id } = req.params
  const _id = ObjectID(id)

  try{
    const appointmentToDelete = await appointment.deleteAppointment(_id)
    res.status(200).json({
      ok: true, 
      message: "Appointment Deleted", 
      payload: appointmentToDelete
    })
  }catch(error){
    next(error)
  }
})

// router.delete("/appointments/:id", (req, res, next) => {
//   const { id } = req.params
//   const _id = ObjectID(id)

//   req.collection.deleteOne(_id)
//   .then(result => res.json(result))
//   .catch(error => res.send(error))

// })

module.exports = router;
