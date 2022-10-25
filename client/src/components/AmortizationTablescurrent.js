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
            <table class="tableNumber" style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <tbody class="tableNumber" style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                    <tr class="tableNumber" style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        <td class="tableNumber" style={{display: "flex", justifyContent: "space-evenly"}}>$ Balance</td>
                        <td class="tableNumber" style={{display: "flex", justifyContent: "space-around", width: "90%"}}>$ Interest</td>
                        <td class="tableNumber" style={{display: "flex", justifyContent: "center"}}>$ Principle</td>
                        <td class="tableNumber" style={{display: "flex", justifyContent: "center"}}>$ Payment</td>
                        <td class="tableNumber" style={{display: "flex", justifyContent: "space-evenly", width: '50%'}}>MI</td>
                        <td class="tableNumber" style={{display: "flex", justifyContent: "space-evenly", width: "75%"}}>Extra</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AmortizationTablesdisplay