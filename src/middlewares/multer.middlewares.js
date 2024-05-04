import multer from "multer"

// Configuring Multer:

const storage = multer.diskStorage({
    // where to store the file code is written below
    destination:function (req, file, cb) {
        cb(null,"./public/temp")
    },

    // filename deciding code below
    filename:function (req,file,cb){
        cb(null, file.originalname)
    }

})

// returning the storage variable in multer method with object

export const upload = multer ({
    storage,
})