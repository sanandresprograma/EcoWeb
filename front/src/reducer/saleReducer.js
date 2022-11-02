import { ALL_SALES_REQUEST, 
    ALL_SALES_SUCCESS, 
    ALL_SALES_FAIL,
    SALE_DETAILS_REQUEST,
    SALE_DETAILS_SUCCESS,
    SALE_DETAILS_FAIL,
    CLEAR_ERRORS} from "../constants/saleConstants";

export const salesReducer = (state ={ sales: []}, action)=>{
    switch(action.type){
        case ALL_SALES_REQUEST:
            return{
                loading:true,
                ventas:[]
            }

        case ALL_SALES_SUCCESS:
            return{
                loading:false,
                ventas: action.payload.ventas,
                cantidad: action.payload.cantidad
            }

        case ALL_SALES_FAIL:
            return{
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        

        default:
            return state;
    }
}

//REDUCER PARA TENER TODOS LOS DETALLES
export const saleDetailsReducer = (state = { sale: {} }, action) => {
    switch (action.type) {

        case SALE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SALE_DETAILS_SUCCESS:
            return {
                loading: false,
                sale: action.payload
            }

        case SALE_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}