import { Router } from "express";
import uploader from "../middlewares/uploader.js";


const router = Router();



router.get('/',(req,res)=>{
    res.send("Hola desde router de productos");
})

const products = []

router.post('/',uploader.single('image'),(req,res)=>{
    console.log(req.file)
    console.log(req.body);
    products.push({
        id:req.body.id,
        tittle:req.body.tittle,
        description:req.body.description,
        code:req.body.code,
        price:req.body.price,
        status:req.body.status,
        stock:req.body.stock,
        category:req.body.category,
        thumbnail:`http://localhost:8080/${req.file.filename}`
    })
    res.send("Producto agregado");
})

router.put('/:pid', (req,res)=>{
    
})

router.get('/:pid',(req,res)=>{

})

router.delete('/:pid',(req,res)=>{

})

export default router;