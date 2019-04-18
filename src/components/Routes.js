import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import Dato from './pages/dato'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/categorias" component={Categorias} />
                <Route exact path="/pelicula" component={Dato} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes