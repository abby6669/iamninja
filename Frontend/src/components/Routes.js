import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Dato from './pages/Dato'
import Trailer from './pages/Trailer'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/categorias" component={Categorias} />
                <Route exact path="/pelicula/:id" component={Dato} />
                <Route exact path='/pelicula/:id/trailer' component={Trailer} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes