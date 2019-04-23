import React,{Component} from 'react'
import Axios from 'axios'
import '../styles/cards.css'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'
class Home extends Component{
    state={
        datos:[]
    }
    componentDidMount(){
        Axios.get("http://localhost:8000/admin/peliculas")
            .then(res => {this.setState({datos: res.data})})
            .catch(err => console.log(err))
        };
    render(){
        return(
            <div>
                <Header />
                {console.log(this.state.datos)}
                <h2 className="encabezados">Ultimos Lanzamientos</h2>
                <div className="home">
                {this.state.datos.map(dato=>
                    <Cards
                    img={dato.Poster}
                    name={dato.Name}
                    id={`/pelicula/${dato._id}`}
                    />)}
                </div>
                <Footer />
            </div>
        )
    }
}
export default Home