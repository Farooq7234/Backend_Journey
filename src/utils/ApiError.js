// 📦 ApiError Class 📦
// This class is a custom error handler that extends the built-in JavaScript Error class.
// It allows us to create more detailed and structured error objects, specifically for API responses.

// The constructor takes an object with the following properties:
// 1. statusCode: The HTTP status code for the error (e.g., 404 for Not Found, 500 for Internal Server Error) 📜
// 2. message: A custom error message (default is "Something went wrong") 📝
// 3. errors: An array to store additional error details or validation errors (default is an empty array) 🔍
// 4. stack: A string to capture the stack trace of the error (default is an empty string) 🏷️

// Here's a breakdown of what the constructor does:
// 1. Calls the super() method with the message, invoking the parent Error class's constructor.
// 2. Sets the statusCode property to the provided statusCode.
// 3. Initializes the data property to null (this can be used to attach additional error data if needed).
// 4. Sets the message property to the provided message.
// 5. Sets the success property to false (indicating the operation was not successful).
// 6. Sets the errors property to the provided errors array.

// For the stack property:
// - If a stack trace is provided, it sets the stack property to the provided stack.
// - If no stack trace is provided, it captures a new stack trace using Error.captureStackTrace(), 
//   which excludes the current constructor from the stack trace for better readability.

// 🚀 Example Usage:
// throw new ApiError({ statusCode: 404, message: "Resource not found", errors: ["ID not found"] });

class ApiError extends Error {
    constructor(
        { statusCode,
            message = "Something went wrong",
            errors = [],
            stack = ""
        }) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }
