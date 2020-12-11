import React from 'react'
import { Redirect,BrowserRouter as Router } from 'react-router-dom'

const PrivateRoute = ({children,...routeProps}) =>{
    
    const profile=false

    if (!profile){
        return <Redirect to='/signin'/>
        }
    
    return  (
        <Router {...routeProps}>
            {children}
        </Router>
    )
}


export default PrivateRoute
