import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getSales } from '../actions/saleActions'
import { useAlert} from 'react-alert'
import {numberWithCommas} from '../numberWithCommas'

export const Transacciones = () => {
    const { loading, ventas, error} = useSelector(state=> state.sales)
    const alert= useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error){
            return alert.error(error)
        }

        dispatch(getSales());
        alert.success("OK")
    }, [dispatch])


    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                <Fragment>
                    <MetaData title="Chatarreria online"></MetaData>

            <br></br>
                <h3>Ventas realizadas</h3>
               <table className="table col-6 text-center">
                <thead className="table-az">
                    <tr>
                        <th className='col-2 text-center'>Fecha</th>
                        <th className='col-2 text-right'>Valor</th>
                        <th className='col-2 text-left'>Método de Pago</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                {ventas && ventas.map(venta => (
                    <tr>
                        <td className="col-2 text-left">{venta.fechaCreacion}</td>
                        <td className="col-2 text-right"> ${numberWithCommas(venta.valortotal)}</td>
                        <td className="col-2 text-left"> {venta.formapago}</td>
                    </tr>
                ))}
                </tbody>
            </table> 

                </Fragment>

            )}
            

        </Fragment>
    )
}
export default Transacciones