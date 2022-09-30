import React from "react"
import LPSdisplay from "./LPSdisplay"

function LPS() {


    return (
        <div>
            <h1>Lender's Policy Schedule</h1>
            <form>
                <input placeholder="Loan Amount $"/>
                <input placeholder="Refinance $"/>
                <input placeholder="Purchases $"/>
                <button>Submit!</button>
            </form>
            <br />
            <br />
        </div>
    )
}

export default LPS