const venta=require("../models/ventas")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpación del require

//Ver la lista de ventas
exports.getSales=async (req,res,next) =>{
    const ventas= await venta.find();
    if (!ventas){
        return res.status(404).json({
            success:false,
            error:true
        })
    }

    res.status(200).json({
        success:true,
        cantidad: ventas.length,
        ventas
    })
}

//Ver una venta por ID
exports.getSaleById= async (req, res, next)=>{
    const sale= await venta.findById(req.params.id)
    
    if (!sale){
            return res.status(404).json({
            success:false,
            message: 'No encontramos esa venta',
            error: true
        })
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu venta: ",
        sale
    })
}

//Update una venta
exports.updateSale= async (req,res,next) =>{
    let sale= await venta.findById(req.params.id) //Variable de tipo modificable
    if (!sale){ //Verifico que el objeto no existe para finalizar el proceso
            return res.status(404).json({
            success:false,
            message: 'No encontramos esa venta'
        })
    }
    //Si el objeto si existia, entonces si ejecuto la actualización
    sale= await venta.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Respondo Ok si la venta si se actualizó
    res.status(200).json({
        success:true,
        message:"venta actualizada correctamente",
        sale
    })
}


//Eliminar una venta
exports.deleteSale= async (req,res,next) =>{
    const sale= await venta.findById(req.params.id) //Variable de tipo modificable
    if (!sale){ //Verifico que el objeto no existe para finalizar el proceso
            return res.status(404).json({ //Si el objeto no existe, return termina el metodo
            success:false,
            message: 'No encontramos ese venta'
        })
    }

    await sale.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"venta eliminado correctamente"
    })
}

//Crear nuevo venta /api/productos
exports.newSale=async(req,res,next)=>{
    const sale= await venta.create(req.body);

    res.status(201).json({
        success:true,
        sale
    })
}


//HABLEMOS DE FETCH
//Ver todos las ventas
function verVentas(){
    fetch('http://127.0.0.1:4000/api/ventas')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verVentas(); LLamamos al metodo creado para probar la consulta

//Ver venta por id
function verVentaPorID(id){
    fetch('http://127.0.0.1:4000/api/venta/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

