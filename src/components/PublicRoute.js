import React from 'react'
import { Redirect,BrowserRouter as Router } from 'react-router-dom'

const PublicRoute = ({children,...routeProps}) =>{
    
    const profile=false

    if (profile){
        return <Redirect to="/"/>
        }
    
    return  (
        <Router {...routeProps}>
            {children}
        </Router>
    )
}


export default PublicRoute
