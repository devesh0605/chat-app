import React from 'react'
import { Redirect,BrowserRouter as Router } from 'react-router-dom'
import { useProfile } from '../context/profile.context'

const PrivateRoute = ({children,...routeProps}) =>{
    
    const profile=useProfile()

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
