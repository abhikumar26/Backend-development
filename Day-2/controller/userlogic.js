import User from "../model/user.js";


const createUser = async (req,res)=>{
    try{
        console.log('log data');
        
        const {name,email,empID} = req.body

        console.log(name,email, empID);
        

        if(!name || !email || empID){
            return res.status(404).json({
                message:"data not found"
            })
        }
        // data creation--
        const user = await User.create({name,email,empID})
        console.log(user);

        // send Response to user--
        res.status(200).json({
            success:true,
            message:"data created successfully"
        })
        
    } catch(error){
        res.status(500).json({
             success:true,
            message:"data has not been created ",error

        })
    }
}
const getuser = async(req,res)=>{
    try{
        const user = await user.find()
        if(user){
            return res.status(404).json({
                message:"data not found"
            })
        }
    }
}

export {createUser};