import multer from 'multer';

const storage = multer.diskStorage({
    
    destination:function(req,file,cb){
        cb(null,`./src/public/images`);
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    },
})

const uploader = multer({storage})

export default uploader;