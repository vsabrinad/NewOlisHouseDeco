import { Router } from "express";
import uploader from "../middlewares/uploader.js";


const router = Router();

const products = [
    {
        id: 1,
        tittle: "Reloj Olivia",
        description: "Ver descripcion",
        code: 170324,
        price: 70000,
        status:"true",
        stock: 10, 
        category: "Deco"
    },
    {
        id: 2,
        tittle: "Espejo Amber",
        description: "Ver descripcion",
        code: 240122,
        price: 35000,
        status:"true",
        stock: 8,
        category: "Espejos",
    },
    {
        id: 3,
        tittle: "Set de velas Ameli",
        description: "Ver descripcion",
        code: 140593,
        price: 15500,
        status:"true",
        stock: 3,
        category: "Deco",
    },
]

router.get('/',(req,res)=>{
    if(req.query.limit){
    res.send("Products")};
})

router.get('/api/products',(req,res)=>{
    const category = req.params.category;
    console.log(category);
    const product = products.find(p => p.category === category);
    if(product){
       return res.send(product);
    }
    else{
       return res.send("El producto no existe");
    }
})



router.get('/:pid',(req,res)=>{
    const product  = req.query.product;
    console.log(req.query);
    if(product){
        const filteredProducts = products.filter(product => product.category === product);
        return res.send(filteredProducts);
    }
    res.send(products);
})

router.post('/',(req,res)=>{

})

router.put('/',(req,res)=>{

})

router.get('/:pid',(req,res)=>{
    const category = req.params.category;
    console.log(category);
    const product = products.find(p => p.category === category);
    if(product){
       return res.send(product);
    }
    else{
       return res.send("El producto no existe");
    }

})

router.get('/', (req, res)=>{
    res.send("Producto Encontrado")
})

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
        category:req.body.category
    })
    res.send("Producto agregado");
})

router.put('/:pid', (req,res)=>{
    const id = req.body.id;
        if(isNaN(id)){
            return res.status(400).send("Error")
        }
    res.send("Producto")
})

router.delete('/:pid',(req,res)=>{
    const id = req.body.id;
    if(isNaN(id)){
        return res.status(400).send("Error")
    }
res.send("Producto eliminado")
})

export default router;