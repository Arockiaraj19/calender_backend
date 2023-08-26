import mongoose from 'mongoose';
const { Schema } = mongoose;



const slotSchema = new Schema({
    userId: {
        type: mongoose.ObjectId,ref:"User"
    }, // String is shorthand for {type: String}
    recruiterId: {
        type: mongoose.ObjectId,ref:"User"
    }, 
    slot: Date,
}, { timestamps: true });

const SlotModel = mongoose.model('Slot', slotSchema);
export default SlotModel;