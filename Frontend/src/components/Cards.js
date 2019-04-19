import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/cards.css'

class Cards extends Component{
    render(){
        return(
            <div className="tarjetas">
                <div className="img">
                    <img src={this.props.img} className="fondo" alt="fondo"/>
                    <img src={this.props.img} alt="carátula" className="caratula"/>
                    
                </div>
                <div className="tarjeta-body">
                    <h2 className="titulo">{this.props.namtituloe}</h2>
                    <p className="sinopsis">{this.props.sinopsis}</p>
                </div>
                <div className="botones">
                    <div className="informacion">
                        <Link to={this.props.id}>
                            <button className="boton boton-informacion">Click aquí para más informacion</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards