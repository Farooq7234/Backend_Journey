import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        video
    },
    { timestamps: true }
)


export const Video = mongoose.model("Video", videoSchema)