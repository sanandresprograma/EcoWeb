const mongoose=require("mongoose")

const ventasSchema=mongoose.Schema({
    cliente:{
        type:String,
        required:[true,"Por favor registra el nombre del usuario."],
        trim:true,
        maxLength:[100, "El nombre del usuario debe exceder los 100 caracteres"]
    },
    valortotal:{
        type: Number,
        default: 0.0
    },
    formapago:{
        type:String,
        required:[true],
        enum:{
           values:[
            "Contraentrega",
            "PSE",
            "Tarjeta de Credito",
            "Otra",
           ] 
        }
    },
    cantidad:{
        type:Number,
        default: 0.0
    },
    
    productos:[
        {
            nombre:{
                type:String,
                required:[true,"Por favor registra el nombre del producto."],
                trim:true,
                maxLength:[120, "El nombre del producto no debe exceder los 120 caracteres"]
            },
            precio:{
                type: Number,
                required:[true, "POr favor registre el precio del producto."],
                maxLength:[8,"El precio del producto no puede estar por encima de 99'999.999"],
                default: 0.0
            },

            categoria:{
                type:String,
                required:[true, "Por favor seleccione la categoria del producto."],
                enum:{
                   values:[
                    "Carton",
                    "Papel",
                    "Metal",
                    "Vidrio",
                    "Plastico"
                   ] 
                }
            },
   
        }
    ],
    vendedor:{
        type:String,
        required:[true, "Por favor registre el vendedor del producto"]
    },
    fechaCreacion:{
        type:Date,
        default:Date.now

    }

})

module.exports=mongoose.model("ventas",ventasSchema)