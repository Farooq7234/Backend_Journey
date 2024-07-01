// Reusable code for future projects using cloudinary

import { v2 as cloudinary} from "cloudinary";
import fs from "fs"


const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("File is uploaded on cloudinary ", response.url)
    } catch (error) {
        fs.unlinkSync(localFilePath) // Remove the locally saved temporary file as the upload operation got failed
        return null
    }
}


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


export {uploadOnCloudinary}