import React from "react"
import { Outlet } from "react-router-dom"
import './style/Footer.css'

export default function Footer() {

    return (
        <>       
            <Outlet /> 
            <footer>
                <div>
                    <div className="footer--desc">
                        Built and Designed by Georgette Dalen.
                    </div>
                    <div className="footer--desc_1">
                        All rights reserved. ©
                    </div>
                </div>
            </footer>
        </>

    )
}