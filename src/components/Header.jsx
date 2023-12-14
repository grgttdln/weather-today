import React from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom" 
import './style/Header.css'

export default function Header() {
    return (
        <>        
            <header>
                <div>Weather Today.</div>
                <Link to="About" className="header--about">About</Link>
                <Link to="/" className="header--weather">Weather</Link>
            </header>
            <Outlet />
        </>

    )
}