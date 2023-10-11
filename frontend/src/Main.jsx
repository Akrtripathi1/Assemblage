import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/LOgin';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import Home from './components/Home';
import LinkBuilder from './components/LinkBuilder';
import DisplayPage from './components/DisplayPage';
import UserAuth from './components/UserAuth';

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Main