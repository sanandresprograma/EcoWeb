import React, {Fragment} from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src="./images/logo.png" alt="Ecoweb Logo" height={80}></img>
                    </div>
                </div>
                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search_field"
                            class="form-control"
                            placeholder='Que producto busca?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                                <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                        id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Panel de Control</span></Link>
                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                                <Link className="dropdown-item" to="/ventas">Ventas</Link>
                                <Link className="dropdown-item" to="/">Mi cuenta</Link>
                                <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                            </div>
                    </div>

                    <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                    <span className="ml-1" id="cart_count">2</span>
                </div>

            </nav>
            <tr className="navbar row text-center navig">
                <a className="link_user col-12 col-md-2" href="/Home" >Inicio</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Promociones</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Nuevos Producto</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Proveedores</a>
                <a className="link_user col-12 col-md-2" href="/Home" >Contactenos</a>
                <a className="link_user col-12 col-md-2" href="/Carrito" >Carrito</a>
                
            
            </tr>
            
        
        </Fragment>
    )
}

export default Header