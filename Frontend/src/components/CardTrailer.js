import React,{Component} from 'react'
import './styles/cardTrailer.css'

export default class CardTrailer extends Component{

    render(){
        return(
            <div>
                <div className="videoTrailer">
                    <iframe src={this.props.movie} allowFullScreen autoplay className="video"></iframe>

                    {/* <video src={this.props.vid} className="video" ></video> */}
                    {/* <div>{this.props.video}</div> */}
                </div>
            </div>
        )}
}