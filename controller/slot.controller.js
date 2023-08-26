import {getDateTimeSlotService, getRecruiterSlotService, getAllSlotService ,getUserSlotService,getDateSlotService,createSlotService,updateSlotService,deleteSlotService} from "../service/slot.service.js";
import { createUserService } from "../service/user.service.js";

 const getAllSlotController=async(req,res,next)=>{
    try {
       const result=await getAllSlotService();
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getUserSlotController=async(req,res,next)=>{
    try {
       const result=await getUserSlotService(req.params.id);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const getRecruiterSlotController=async(req,res,next)=>{
    try {
       const result=await getRecruiterSlotService(req.params.id);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const getDateSlotController=async(req,res,next)=>{
    try {
       const result=await getDateSlotService(req.params.date);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const getDateTimeSlotController=async(req,res,next)=>{
    try {
       const result=await getDateTimeSlotService(req.params.date);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const createSlotController=async(req,res,next)=>{
    try {
        const {name,number,slot,email,recruiterId}=req.body;
        const userResult=await createUserService({
            name,number,email
        });
    
    const result=await createSlotService({
        slot,recruiterId,userId:userResult._id
    });
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const updateSlotController=async(req,res,next)=>{
    try {
       const result=await updateSlotService(req.params.id,req.body);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const deleteSlotController=async(req,res,next)=>{
    try {
       const result=await deleteSlotService(req.params.id);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

export{
    getDateTimeSlotController,  getAllSlotController,getUserSlotController,getDateSlotController,createSlotController,updateSlotController,deleteSlotController,getRecruiterSlotController
}