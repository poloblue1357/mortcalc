import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"
import "./AmortizationTables.css"


function AmortizationTablesdisplay(props) {

const context = useContext(MortgageContext)

const [count, setCount] = useState(0)

function countOne() {
    setCount(prevCount => +prevCount + 1)
}

    return (
        <div class="currentContainer">
            <p class="number">1</p>
            <table class="tableNumber">
                <tbody>
                    <tr class="tableNumber" style={{display: "flex", justifyContent: "space-around"}}>
                        <td class="tableNumber">Balance</td>
                        <td class="tableNumber">Interest</td>
                        <td class="tableNumber">Principle</td>
                        <td class="tableNumber">Payment</td>
                        <td class="tableNumber">MI</td>
                        <td class="tableNumber">Extra</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AmortizationTablesdisplay