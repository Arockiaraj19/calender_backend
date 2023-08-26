import express from "express"
import { getUserController ,getRecruiterController,updateUserController,createUserController,deleteUserController} from "../controller/user.controller.js";




const router=express.Router()



router.get("/",getUserController)
router.get("/recruiter",getRecruiterController)
router.post("/",createUserController)
router.put("/:id",updateUserController)
router.delete("/:id",deleteUserController)

export default router;