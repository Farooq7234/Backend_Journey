const asyncHandler = (requestHandler) => {
     return (req, res, next) => {
         Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err))
    }
}





// //This is an higher order function that accepts another funtions as an argument or return. more like it treat them as a variable :)

// const asyncHandler  = (func) => async(req, res, next) => {
//     try {
//         await func(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }    

export { asyncHandler }


