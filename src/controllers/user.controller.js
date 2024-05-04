import asyncHandler from '../utils/asyncHandler.js'

const registerUser = asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"The status is 200"
    })
})

export {registerUser}