import express from 'express';
import productsRouter from './routes/products.router.js';
import carritoRouter from './routes/carrito.router.js';
import __dirname from "./utils.js";

const app = express();

const PORT = process.env.PORT||8080;

app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`));

app.use(express.json());


app.use('/api/products',productsRouter);
app.use('/api/carrito',carritoRouter);