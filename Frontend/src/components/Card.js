import React,{Component} from 'react'
import './styles/card.css'
class Card extends Component{
    trailer = () =>{
        window.open(`/pelicula/${this.state.dato._id}/trailer`, '', 'width=100000, height=499');
        // this.props.movie = this.props.trailer
    }
    render(){
        return(
            <div className="tarjeta">
                <div className="video">
                    <iframe src={this.props.movie} allowFullScreen autoplay className="video"></iframe>

                    {/* <video src={this.props.vid} className="video" ></video> */}
                    {/* <div>{this.props.video}</div> */}
                </div>
                <div className="botonTrailer">{this.props.botonTrailer}</div>
                
                <div className="tarjeta-body">
                    <h2 className="titulo">{this.props.name}</h2>
                    <ul>
                        <li className="year"><span className="tema">Año de lanzamiento:</span>  {this.props.year}</li>
                        <li className="genre"><span className="tema">Género:</span> {this.props.genre}</li>
                        <li className="director"><span className="tema">Director: </span>{this.props.director}</li>
                        <li className="actors"><span className="tema">Actores:</span> {this.props.actors}</li>
                        <li className="sinopsis"><span className="tema">Sinopsis:</span> {this.props.sinopsis}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Card