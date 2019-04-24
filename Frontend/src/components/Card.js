import React,{Component} from 'react'
import './styles/card.css'
class Card extends Component{
    render(){
        return(
            <div className="tarjeta">
                <div className="video">
                    <iframe src={this.props.video} allowFullScreen autoplay className="video"></iframe>

                    {/* <video src={this.props.vid} className="video" ></video> */}
                    {/* <div>{this.props.video}</div> */}
                </div>
                <button className="boton-trailer boton" onClick="mostrar()">Trailer</button>
                    <button className="boton-video boton">Video</button>
                <div className="tarjeta-body">
                    <h2 className="titulo">{this.props.name}</h2>
                    <ul>
                        <li className="year"><span className="tema">Año de lanzamiento:</span>  {this.props.year}</li>
                        <li className="genre"><span className="tema">Género:</span> {this.props.genre}</li>
                        <li className="director"><span className="tema">Director: </span>{this.props.director}</li>
                        <li className="actors"><span className="tema">Actores</span> {this.props.actors}</li>
                        <li className="sinopsis"><span className="tema">Sinopsis:</span> {this.props.sinopsis}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Card