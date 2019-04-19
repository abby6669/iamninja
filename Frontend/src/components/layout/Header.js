import React,{Component} from 'react'
import {Link} from 'react-router-dom'
// import styled from 'styled-components';
import logo from './logo.png'
import './styles.css'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="botones">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/categorias">Categorias</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header