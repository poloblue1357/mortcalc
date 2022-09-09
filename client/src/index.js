import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import { BrowserRouter as Router} from "react-router-dom"
import { MortgageContextProvider } from "./ContextProvider"

ReactDOM.render(
    <Router>
        <MortgageContextProvider>
            <App />
        </MortgageContextProvider>
    </Router>, 
    document.getElementById("root")
)