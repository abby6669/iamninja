import React,{Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <div className="footer"> 
                <div className="copyright">
                    <p>&#169; Copyright 2019 - Moshe Shabes y Abby Littman</p>
                </div>
                <div className="redes-sociales">
                    <a className="facebook" target="_blank"><i className="fab fa-facebook-square"></i></a>
                    <a className="twitter" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a className="instagram" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a className="youtube" target="_blank"><i className="fab fa-youtube"></i></a>
                    <a className="github" target="_blank"><i className="fab fa-github"></i></a>
                </div>
            </div>
        )
    }
}
export default Footer