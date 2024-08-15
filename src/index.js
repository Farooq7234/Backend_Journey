import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"


// TIPS: Make sure to load the env in the main file to get it available for all files whenever the project loads

dotenv.config({
    path: './env'
})


// As the connectDB is a aysnc function so then and catch can be used (basically promise)

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port: ${process.env.PORT}`)
        })
        app.on("Error",(error)=>{
            console.log("Error", error)
            throw error
        })
    })

    .catch((err) => {
        console.log("MONGO DB connection failed !!!", err)
    })


/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/