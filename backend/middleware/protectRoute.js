import { ENV_VARS } from "../config/envVars.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";


export async  function protectRoute(req,res,next){


try{
    const token = req.cookies["jwt-netflix"];
    if(!token){
        return res.status(401).send({success:false,message:"Unauthorized"});
    }

      const decode =jwt.verify(token,ENV_VARS.JWT_SECRET);
      if(!decode)
      {
        return res.status(401).send({success:false,message:"Unauthorized"});
      }
      const user = await User.findById(decode.userId).select("-password");
      if(!user)
      {
        return res.status(401).send({success:false,message:"User not Found"});
      }
      req.user = user;
      next();

}  catch(error){
    console.log("error in protect routes",error.message);
    res.status(500).json({success:false,message:"Internal Server Error"});
}


}