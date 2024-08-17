import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    
    const { username , email, password} = req.body;

    const hashPassword = await bcrypt.hash(password,10);

    try {

        const newUser = await prisma.user.create({
            data:{
                username,
                email,
                password:hashPassword
            }
        })
        res.status(201).json("User created successfully !!");
    }catch(err){
        console.log(err.message);
    }
    

}
export const login = async(req,res)=>{
    const {username, password} = req.body;

    try {
        
        const user = await prisma.user.findUnique({
            where:{username}
        })

        if(!user) return res.status(401).json("Invalid username or password");
    

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid) return res.status(401).json("Invalid username or password");

        const Age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign({
            id:user.id
        },process.env.JWT_SECRET,{
            expiresIn:Age
        });
        

        res.cookie("token",token,{
            httpOnly:true,
            // secure:true
            maxAge:Age
        }).json("Cookie has been set")

    } catch (error) {
        console.log(error.message);
        
        res.status(401).json({message:"Failed to login"});
    }
}
export const logout = (req,res)=>{
    res.clearCookie("token").status(200).json({message:"Logout Successfully"});
}
