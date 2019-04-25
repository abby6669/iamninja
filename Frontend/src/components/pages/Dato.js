import React,{Component} from 'react'
import Axios from 'axios'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Card from '../Card'
import ReactPlayer from 'react-player'

export default class Dato extends Component{
    constructor(props){
        super(props)
        this.state={
            dato:[]
        }
    }

    componentDidMount(){
        Axios.get(`http://localhost:8000/admin/peliculas/${this.props.match.params.id}`)
        .then(res => {this.setState({dato:res.data})})
        .catch(err => console.log(err))
    }
    trailer = () =>{
        window.open(`/pelicula/${this.state.dato._id}/trailer`, '', 'width=100000, height=499');
        // this.props.movie = this.props.trailer
    }
    render(){
        return(
            <div>
                <Header />
                <Card
                
//                 video={
//                     <ReactPlayer 
//                     url={require('../../videos/Ant_man.mp4')}
//                     width="100%"
//                     height="300px"
//                     controls={true}
// />
//                 }
                botonTrailer={<button className="boton-video boton" id="video" onClick={this.trailer}>Trailer</button>}
                name={this.state.dato.Name}
                director={this.state.dato.Director}
                year={this.state.dato.Year}
                genre={this.state.dato.Gendre}
                actors={this.state.dato.Actors}
                sinopsis={this.state.dato.Sinopsis}
                trailer={this.state.dato.Trailer}
                movie={this.state.dato.Movie}
                />
                <Footer />
            </div>
        )
    }
}