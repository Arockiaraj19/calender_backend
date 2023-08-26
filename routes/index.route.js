import express from "express"
import userRouter from './user.route.js'
import slotRouter from './slot.route.js'


const router=express.Router()

router.use("/user",userRouter)
router.use('/slot',slotRouter)


export default router;