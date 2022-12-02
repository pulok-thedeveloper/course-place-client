import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [mode, setMode] = useState(false);


const handleToggle =() =>{
    setMode(!mode)
}

const createUser = (email, password) =>{
    
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

const googleSignIn = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
}

const githubSignin = (githubProvider) =>{
    return signInWithPopup(auth, githubProvider);
}

const updateUser = (name, image) =>{
    return updateProfile(auth.currentUser, {displayName:name, photoURL:image});
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

const authInfo = {user, loading,handleToggle, mode, createUser, signInUser, updateUser, logOut, googleSignIn, githubSignin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;