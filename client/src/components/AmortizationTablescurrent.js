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
            <p class="number" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>1</p>
            <table class="tableNumber">
                <tbody class="tableNumber">
                    <tr class="tableNumber" style={{display: "flex", justifyContent: "space-around"}}>
                        <td class="tableNumber" style={{flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Balance</td>
                        <td class="tableNumber" style={{flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Interest</td>
                        <td class="tableNumber" style={{flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principle</td>
                        <td class="tableNumber" style={{flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Payment</td>
                        <td class="tableNumber" style={{flex: .5, textAlign: "center", width: "60px", padding: "0px 0px"}}>MI</td>
                        <td class="tableNumber" style={{flex: .75, textAlign: "center", width: "60px", padding: "0px 0px"}}>Extra</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AmortizationTablesdisplay