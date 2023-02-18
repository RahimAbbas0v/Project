const mongoose=require("mongoose");
const UserDetailSchema= new mongoose.Schema(
    {
        email: { type: String, unique: true },
         password: String,
         firstname: String,
         phone:String, 
         lastname: String,
         address:String,
         UserType:String,
    },{
        collection:"UserInfo",
    }
);
mongoose.model("UserInfo",UserDetailSchema)