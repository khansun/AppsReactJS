import React, {useState, useEffect, useContext} from 'react';
import {auth} from './../firebase';

const AuthContext = React.createContext();

const useAuth = ()=>{
    return useContext(AuthContext);
};

const AuthProvider = (props) =>{
    const [currentUser, setCurrentUser] = useState({});
    const signUp = (email, password) =>{
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const signIn = (email, password) =>{
        return auth.signInWithEmailAndPassword(email, password);

    };


    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged((user)=>{
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return(
        <AuthContext.Provider
         value = {{
            currentUser, 
            signUp,
            signIn
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuth};
