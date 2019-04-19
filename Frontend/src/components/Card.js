import React,{Component} from 'react'
import './styles/card.css'
class Card extends Component{
    render(){
        return(
            <div className="tarjeta">
                <div className="video">
                    <iframe src={this.props.video} className="video" frameBorder="0"></iframe>
                    <video src={this.props.vid}></video>
                </div>
                <div className="tarjeta-body">
                    <h2 className="titulo">{this.props.name}</h2>
                    <ul>
                        <li className="year">{this.props.year}</li>
                        <li className="genre">{this.props.genre}</li>
                        <li className="director">{this.props.director}</li>
                        <li className="actors">{this.props.actors}</li>
                        <li className="sinopsis">{this.props.sinopsis}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Card