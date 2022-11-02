const express= require("express")
const ruta=express.Router();

const {getSales, newSale, getSaleById, updateSale, deleteSale} =require("../controllers/ventasController")

ruta.route('/ventas').get(getSales) // ruta para ver Ventas
ruta.route('/venta/nueva').post(newSale); // establecemos la ruta de nuevo Venta
ruta.route('/venta/:id').get(getSaleById);
ruta.route('/venta/:id').put(updateSale); //Ruta para actualizar
ruta.route('/venta/:id').delete(deleteSale); // Ruta para eliminar

module.exports=ruta;