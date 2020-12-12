import React from 'react'
import { Redirect,BrowserRouter as Router } from 'react-router-dom'
import { Container, Loader } from 'rsuite'
import { useProfile } from '../context/profile.context'

const PrivateRoute = ({children,...routeProps}) =>{
    
    const {profile,isLoading}=useProfile()

    if (isLoading && !profile){
        return <Container>
            <Loader center vertical size='md' content='Loading' speed="slow"/>
        </Container>
    }

    if (!profile && !isLoading){
        return <Redirect to='/signin'/>
        }
    
    return  (
        <Router {...routeProps}>
            {children}
        </Router>
    )
}


export default PrivateRoute
