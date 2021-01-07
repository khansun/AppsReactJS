import React from 'react';
import{Route, Redirect, Router} from 'react-router-dom';
import {useAuth} from './contexts/AuthContext';

const PrivateRoute = ({component: Component, ...rest})=>{
    const {currentUser} = useAuth();
    return(
        <Route
            { ...rest}
            render = 
            {(props)=>{
                return currentUser? (<Component {...props}/>
                    ):( 
                    <Redirect to ='/signin'/>
                    );
            }}
        >

        </Route>
    )
} 

export default PrivateRoute;