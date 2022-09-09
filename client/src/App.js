import React, {useContext} from "react"
import "./App.css"
import { Link, Route, Switch, Redirect } from "react-router-dom"
import Home from "./components/Home"
import PayoffCalc from "./components/PayoffCalc"
import FeeSetup from "./components/FeeSetup"
import LPS from "./components/LPS"
import Leads from "./components/Leads"
import Realtors from "./components/Realtors"
import Status from "./components/Status"
import Campaigns from "./components/Campaigns"
import Auth from "./components/Auth"
import {MortgageContext} from "./ContextProvider"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from "./components/Navbar"

function App() {
    const { token, logout } = useContext(MortgageContext)
    return (
        <div>
            { token && <Navbar logout={logout}/> }
            <Switch>
                <Route
                exact path="/"
                render={() => token ? <Redirect to="/home" /> : <Auth />}
                />
                <ProtectedRoute 
                    path="/home"
                    component={Home}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/payoffcalc"
                    component={PayoffCalc}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/feesetup"
                    component={FeeSetup}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/lps"
                    component={LPS}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/leads"
                    component={Leads}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/realtors"
                    component={Realtors}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/status"
                    component={Status}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/campaigns"
                    component={Campaigns}
                    redirectTo="/"
                    token={token}
                />
            </Switch>
        </div>
    )
}

export default App