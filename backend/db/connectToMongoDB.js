import mongoose from "mongoose";

export const connectToMongoDB = ()=>{
    mongoose.connect(process.env.MONGO_URI , {
        dbName :"MERN_CHAT_APPLICATION"
    })
    .then(()=>{
        console.log("Connected to database")
    })
    .catch((err)=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    });
};

export default connectToMongoDB;
