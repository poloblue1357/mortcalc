import React from "react"
import "./App.css"
import { Link, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import PayoffCalc from "./components/PayoffCalc"
import FeeSetup from "./components/FeeSetup"
import LPS from "./components/LPS"
import Leads from "./components/Leads"
import Realtors from "./components/Realtors"
import Status from "./components/Status"
import Campaigns from "./components/Campaigns"

function App() {

    return (
        <div>
            <nav className="navbarlinks">
                <h1>Beam Lending!</h1>
                <div className="navbartop">
                    <h3 className="quotes">Quotes</h3>
                    <div className="toplinks">
                        <Link to="/" className="navbaritems">Home</Link>
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
            <br />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/payoffcalc">
                    <PayoffCalc />
                </Route>
                <Route exact path="/feesetup">
                    <FeeSetup />
                </Route>
                <Route exact path="/lps">
                    <LPS />
                </Route>
                <Route exact path="/leads">
                    <Leads />
                </Route>
                <Route exact path="/realtors">
                    <Realtors />
                </Route>
                <Route exact path="/status">
                    <Status />
                </Route>
                <Route exact path="/campaigns">
                    <Campaigns />
                </Route>
            </Switch>
        </div>
    )
}

export default App