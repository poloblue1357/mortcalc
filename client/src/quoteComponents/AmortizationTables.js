import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import AmortizationTablesdisplay from "./AmortizationTablesdisplay"


function AmortizationTables() {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Amortization Tables</h1>
        </div>
    )
}

export default AmortizationTables