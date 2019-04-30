import React,{Component} from 'react'
import Axios from 'axios'
import '../styles/cards.css'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'
import '../styles/Home.css'
import '../styles/subida.css'
class Home extends Component{
    state={
        datos:[]
    }
    render(){
        return(
            <div>
                <Header />
                    <form action="/admin/subida/aceptado" method="post" className="formulario-subida">
                        <input className="input-formulario-subida" type="text" name="Name" placeholder="Nombre de Película" />
                        <input className="input-formulario-subida" type="text" name="Director" placeholder="Director" />
                        <input className="input-formulario-subida" type="text" name="Year" placeholder="Año" />
                        <input className="input-formulario-subida" type="text" name="Gendre" placeholder="Genero" />
                        <input className="input-formulario-subida" type="text" name="Actors" placeholder="Ac" />
                        <input className="input-formulario-subida" type="text" name="Sinopsis" placeholder="Sin" />
                        <input className="input-formulario-subida" type="text" name="Poster" placeholder="Poster" />
                        <input className="input-formulario-subida" type="text" name="Trailer" placeholder="Trailer" />
                        <input className="input-formulario-subida" type="text" name="Movie" placeholder="Movie" />
                        <button className="boton-formulario-subida" type="submit">Enviar</button>
                    </form>
                <Footer />
            </div>
        )
    }
}
export default Home