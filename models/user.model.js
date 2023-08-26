import mongoose from 'mongoose';
const { Schema } = mongoose;



const userSchema = new Schema({
    name:{
      type:String,
      unique: true, required: true
    }, // String is shorthand for {type: String}
    email:{
      type:String,
      unique: true, required: true
    }, 
    number:{
      type:String,
      unique: true, required: true
    },
    userType: {
      type: String,
      enum : ['user','recruiter'],
      default: 'user'
  },
  },{ timestamps: true });

  const UserModel = mongoose.model('User', userSchema);
  export default UserModel;