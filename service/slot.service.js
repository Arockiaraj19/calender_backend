import SlotModel from "../models/slot.model.js";



const getAllSlotService = async () => {
    try {
        const result = await SlotModel.find().populate('userId').
        populate('recruiterId').
        exec();
        return result;
    } catch (error) {
        throw error;
    }
}

const getUserSlotService = async (
    userId
) => {
    try {
        const result = await SlotModel.find({
            userId
        }).populate('userId').
        populate('recruiterId').
        exec();
        return result;
    } catch (error) {
        throw error;
    }
}
const getRecruiterSlotService = async (
    recruiterId
) => {
    try {
        const result = await SlotModel.find({
            recruiterId
        }).populate('userId').
        populate('recruiterId').
        exec();
        return result;
    } catch (error) {
        throw error;
    }
}
//date should be '1994-05-23'
const getDateSlotService = async (
   date
) => {
    try {
        console.log({
            slot: { $gte: new Date(date), $lte:new Date(new Date(date).getTime() + 1*24*60*60*1000) }
         });
        const result = await SlotModel.find({
           slot: { $gte: new Date(date), $lte:new Date(new Date(date).getTime() + 1*24*60*60*1000) }
        }).populate('userId').
        populate('recruiterId').
        exec();
        return result;
    } catch (error) {
        throw error;
    }
}
const getDateTimeSlotService = async (
    date
 ) => {
     try {
        
         const result = await SlotModel.find({
            slot: new Date(date)
         }).populate('userId').
         populate('recruiterId').
         exec();
         return result;
     } catch (error) {
         throw error;
     }
 }
const createSlotService = async (slotData) => {
    try {

        const data = new SlotModel(slotData);
        const result = await data.save();
        return result;
    } catch (error) {
        throw error;
    }
}


const updateSlotService=async(id,updatedData)=>{
    try {
    
        const options = { new: true };

        const result = await SlotModel.findByIdAndUpdate(
            id, updatedData, options
        );
        return result;
    } catch (error) {
        throw error;
    }
}

const deleteSlotService=async(id)=>{
    try {
        const data = await SlotModel.findByIdAndDelete(id);
        return data;
    } catch (error) {
        throw error;
    }
}

export {
    getDateTimeSlotService,   getAllSlotService,createSlotService,updateSlotService,deleteSlotService,getUserSlotService,getDateSlotService , getRecruiterSlotService
}