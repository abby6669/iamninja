import React,{Component} from 'react'
import Axios from 'axios'
import CardTrailer from '../CardTrailer'

export default class Trailer extends Component{
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
    render(){
        return(
            <div>
                <CardTrailer
                movie={this.state.dato.Trailer}
                />
            </div>
        )
    }
}