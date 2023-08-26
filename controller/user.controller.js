
import { getAllUserService,getAllRecruiterService,createUserService,updateUserService,deleteUserService } from "../service/user.service.js";

 const getUserController=async(req,res,next)=>{
    try {
       const result=await  getAllUserService();
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const getRecruiterController=async(req,res,next)=>{
    try {
       const result=await getAllRecruiterService(req.params.date);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}


const createUserController=async(req,res,next)=>{
    try {
       const result=await  createUserService(req.body);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const updateUserController=async(req,res,next)=>{
    try {
       const result=await updateUserService(req.params.id,req.body);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
const deleteUserController=async(req,res,next)=>{
    try {
       const result=await deleteUserService(req.params.id);
       return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}


export {
    getUserController,getRecruiterController,createUserController,updateUserController,deleteUserController
}