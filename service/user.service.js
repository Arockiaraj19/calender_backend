import UserModel from "../models/user.model.js";



const getAllUserService = async () => {
    try {
        const result = await UserModel.find( {
            userType:"user"
        });
        return result;
    } catch (error) {
        throw error;
    }
}

const getAllRecruiterService = async () => {
    try {
        const result = await UserModel.find(
            {
                userType:"recruiter"
            }
        );
        return result;
    } catch (error) {
        throw error;
    }
}
const createUserService = async (userData) => {
    try {

        const data = new UserModel(userData);
        const result = await data.save();
        return result;
    } catch (error) {
        throw error;
    }
}


const updateUserService=async(id,updatedData)=>{
    try {
    
        const options = { new: true };

        const result = await UserModel.findByIdAndUpdate(
            id, updatedData, options
        );
        return result;
    } catch (error) {
        throw error;
    }
}

const deleteUserService=async(id)=>{
    try {
        const data = await UserModel.findByIdAndDelete(id);
        return data;
    } catch (error) {
        throw error;
    }
}

export {
    getAllUserService,createUserService,updateUserService,deleteUserService,getAllRecruiterService
}