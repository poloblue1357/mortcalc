import React from "react"
import {Link } from "react-router-dom"

function Navbar(props) {
    const { logout } = props
    return (
        <div>
        <nav className="navbarlinks">
                <div className="navbarHeader">
                    <Link to="/" className="homeButton" style={{padding: "5px", margin: "5px", fontSize: "20px"}}>Home</Link>
                    <h1>Beam Lending!</h1>
                    <button onClick={logout} style={{fontSize: "15px"}}>Logout</button>
                </div>
                <br></br>
                <div className="navbartop">
                    <h3 className="quotes">Quotes</h3>
                    <div className="toplinks">
                        <Link to="/payoffcalc" className="navbaritems">Payoff Calculator</Link>
                        <Link to="/feesetup" className="navbaritems">Fee Setup</Link>
                        <Link to="/lps" className="navbaritems">Lender's Policy Schedule</Link>
                    </div> 
                </div>
                <br />
                <div className="navbarbottom">
                    <h3 className="MLMD">Mortgage Lead Management Document</h3>
                    <div className="bottomlinks">
                        <Link to="/leads" className="navbaritems">Leads</Link>
                        <Link to="/realtors" className="navbaritems">Realtors</Link>
                        <Link to="/status" className="navbaritems">Status</Link>
                        <Link to="/campaigns" className="navbaritems">Campaigns</Link>
                    </div>
                </div>
            </nav>
            <br></br>
        </div>
    )
}

export default Navbar