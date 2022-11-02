const express=require("express");
const app = express();
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")

//Uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

//importar la ruta
const productos= require("./routes/products")
const ventas= require("./routes/sales")
const usuarios=require("./routes/auth")

//ruta para el navegador // sujeto a decisión
app.use('/api',productos) 
app.use('/api',usuarios)
app.use('/api',ventas)

//Manejo de errores
app.use(errorMiddleware)


module.exports=app