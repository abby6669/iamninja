import React,{Component} from 'react'
import Axios from 'axios'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Card from '../Card'
import ReactPlayer from 'react-player'

export default class Dato extends Component{
    state={
        dato:[]
    }
    componentDidMount(){
        Axios.get(`http://localhost:8000/admin/peliculas/${this.props.match.params.id}`)
        .then(res => {this.setState({dato:res.data})})
        .catch(err => console.log(err))
    }
    video(){
        var video = this.state.dato.Video
        return video
    }
    render(){
        return(
            <div>
                <Header />
                {console.log(this.state.dato.Video)}
                <Card
                video={
                    <ReactPlayer 
                    url={require('../../videos/Ant_man.mp4')}
                    width="100%"
                    height="300px"
                    controls={true}
/>
                }
               

                name={this.state.dato.Name}
                year={this.state.dato.Year}
                gendre={this.state.dato.Gendre}
                director={this.state.dato.Director}
                actors={this.state.dato.Actors}
                sinopsis={this.state.dato.Sinopsis}
                />
                <Footer />
            </div>
        )
    }
}