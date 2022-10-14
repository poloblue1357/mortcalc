import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import "./RefinanceQuote.css"

function RefinanceQuote() {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Refinance Quote</h1>
        </div>
    )
}

export default RefinanceQuote