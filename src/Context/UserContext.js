import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) =>{
    
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const providerLogin = (provider) =>{
    return signInWithPopup(auth, provider);
}

const gitProviderLogin = (gitProvider) =>{
    return signInWithPopup(auth, gitProvider);
}

const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
    })

    return () => unSubscribe();
},[])

const authInfo = {user, loading, createUser, signInUser, logOut, providerLogin, gitProviderLogin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;