import axios from 'axios';

import {
    ALL_SALES_REQUEST,
    ALL_SALES_SUCCESS,
    ALL_SALES_FAIL,
    SALE_DETAILS_REQUEST,
    SALE_DETAILS_SUCCESS,
    SALE_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/saleConstants';

export const getSales = () => async(dispatch)=>{
    try {
        dispatch({type: ALL_SALES_REQUEST})

        const {data} = await axios.get('api/ventas')

        dispatch({
            type:ALL_SALES_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type:ALL_SALES_FAIL,
            payload: error.response.data.message
        })
    }
}

//VER DETALLE DE LA VENTA
export const getSaleDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type: SALE_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/venta/${id}`)

        dispatch({
            type:SALE_DETAILS_SUCCESS,
            payload: data.Sale
        })
    }catch (error){
        dispatch({
            type:SALE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}


//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}