import mongoose  from "mongoose";

const dbConnection=async()=>{
 try {
  await mongoose.connect('mongodb+srv://arockiarajdev:Gc3JZ4mb5lnmFBjG@calender.udv0m1o.mongodb.net/?retryWrites=true&w=majority');
  console.log("db connected");
 } catch (error) {
  console.log("db have some issue");
  console.log(error);
 }

}

export default dbConnection;