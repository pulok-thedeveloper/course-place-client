import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    const {mode} = useContext(AuthContext)
    return (
        <div className={`${mode ? "bg-dark text-white" : ""}`}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;