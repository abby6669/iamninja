import React,{Component} from 'react'
// import mongoose from 'mongoose';
// import Axios from 'axios'
import '../styles/cards.css'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'


class Home extends Component{
    state={
        datos:{}
    }
    // componentDidMount(){
    //     Axios.get(URL_MONGO)
    //         .then(res => {this.setState({datos:res.data})})
    //         .catch(err => console.log(err));
    // }
    render(){
        return(
            <div>
                <Header />
                
                <h2 className="encabezados">Ultimos Lanzamientos</h2>
                <div className="home">
                <Cards 
                img='https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'
                video='https://www.youtube.com/embed/TcMBFSGVi1c?controls=0?autoplay=1'
                name='Avengers: End Game'
                sinopsis='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                // id={`/pelicula/${dato.id}`}
                />        
                <Cards 
                img='https://img04.mgo-images.com/image/thumbnail?id=MMV1EB58C939DBFDAD919D1F10D305CC0F59&ql=70&sizes=310x465'
                titulo='Aquaman'
                sinopsis='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
                <Cards 
                img='https://miradetodo.net/wp-content/uploads/2019/01/tt5848272.jpg'
                titulo='Wifi Ralph'
                sinopsis='	
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
                </div>
                <h2 className="encabezados">Más Visitados</h2>
                <Cards 
                img='https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'
                titulo='Avengers: End Game'
                sinopsis='Lorem Ipsum'
                />
                <h2 className="encabezados">Mejor Calificados</h2>
                <Cards 
                img='https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'
                titulo='Avengers: End Game'
                sinopsis='Lorem Ipsum'
                id='1'
                amount='250'
                />
                <Footer />
            </div>
        )
    }
}
export default Home