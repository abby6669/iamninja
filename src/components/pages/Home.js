import React,{Component} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'

class Home extends Component{
    render(){
        return(
            <div>
                <Header />
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