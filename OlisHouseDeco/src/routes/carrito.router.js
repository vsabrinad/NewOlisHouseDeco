import { Router } from "express";

const router = Router();


router.get('/',(req,res)=>{
    res.send("Hola desde router de productos");
})

router.post('/',uploader.single('image'),(req,res)=>{
    console.log(req.file)
    console.log(req.body);
    products.push({
        id:req.body.id,
        products:req.body.products,
    })
    res.send("Producto agregado");
})

router.get('/:cid',(req,res)=>{

})

router.post('/:cid/product/:pid',(req,res)=>{
    console.log(req.file)
    console.log(req.body);
    products.push({
        id:req.body.id,
        quantity:req.body.quantity,
    })
    res.send("Producto agregado");
})

router.get('/:pid',(req,res)=>{

})

export default router;