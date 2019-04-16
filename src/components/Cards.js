import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Card extends Component{
    render(){
        return(
            <div className="tarjeta">
                <div className="img">
                    <img src={this.props.img} alt="carátula"/>
                </div>
                <div className="tarjeta-body">
                    <h2 className="titulo">{this.props.titulo}</h2>
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
export default Card