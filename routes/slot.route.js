import express from "express"
import {getDateTimeSlotController, getAllSlotController,getUserSlotController,getDateSlotController,createSlotController,deleteSlotController ,getRecruiterSlotController} from "../controller/slot.controller.js"


// import {  getUserService,editUserService,updatePasswordService ,uploadImage} from "../service/user.service"



const router=express.Router()



router.get("/",getAllSlotController)
router.get("/user/:id",getUserSlotController)
router.get("/recruiter/:id",getRecruiterSlotController)
router.get("/date/:date",getDateSlotController)
router.get("/datetime/:date",getDateTimeSlotController)
router.post("/",createSlotController)
router.delete("/:id",deleteSlotController)

export default router;