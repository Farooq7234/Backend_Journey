// 🌟 asyncHandler Function 🌟
// This function takes a request handler function (requestHandler) as its argument
// and returns a new asynchronous function that can handle errors gracefully.

// The returned function has three parameters:
// 1. req: The request object 📨
// 2. res: The response object 📬
// 3. next: The next middleware function in the Express.js middleware stack 🔄

// Inside the returned function, we use an immediately invoked asynchronous function
// to handle the request. We call the original requestHandler function and pass it
// the req, res, and next objects. This ensures the requestHandler runs as intended.

// The Promise.resolve() method is used to handle the requestHandler's returned value,
// ensuring it's treated as a resolved promise. If the requestHandler throws an error
// or returns a rejected promise, the catch() method catches the error and passes it
// to the next middleware function by calling next(err). This is essential for error
// handling in Express.js applications, allowing errors to be managed in a centralized
// error-handling middleware.

// 🚀 Here's how it works step by step:
// 1. 🛠️ Define an asynchronous function that takes req, res, and next as parameters.
// 2. 🏃‍♂️ Immediately invoke this asynchronous function with the provided parameters.
// 3. ⚙️ Use Promise.resolve() to ensure the requestHandler's return value is a promise.
// 4. 🚨 Use catch() to catch any errors thrown by the requestHandler and pass them to next().

// 📝 Usage Example:
// const someAsyncRoute = asyncHandler(async (req, res, next) => {
//   // Your async code here
// });

// In summary, asyncHandler is a utility function that helps manage errors in async
// route handlers in Express.js, making your code cleaner and more reliable. 🧹


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


