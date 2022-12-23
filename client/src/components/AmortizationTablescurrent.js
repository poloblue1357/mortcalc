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
            <p class="number" style={{display: "flex", justifyContent: "center", alignItems: "center", verticalAlign: "middle", paddingTop: '1.5px'}}>{props.i+1}</p>
            {/* <table class="tableNumber">
                <tbody class="tableNumber"> */}
                    <tr class="tableNumber" style={{display: "flex", justifyContent: "space-around"}}>
                        <td class="tableNumber" style={{flex: 1, textAlign: "center", width: "60px", padding: "4px 1px"}}>${props.info.balance.toLocaleString("en", {minimumFractionDigits: 2,
  maximumFractionDigits: 2})}</td>
                        <td class="tableNumber" style={{flex: 1, textAlign: "center", width: "60px", padding: "4px 1px"}}>${props.info.interest.toLocaleString("en", {minimumFractionDigits: 2,
  maximumFractionDigits: 2})}</td>
                        <td class="tableNumber" style={{flex: 1, textAlign: "center", width: "60px", padding: "4px 2px"}}>${props.info.principal.toLocaleString("en", {minimumFractionDigits: 2,
  maximumFractionDigits: 2})}</td>
                        <td class="tableNumber" style={{flex: 1, textAlign: "center", width: "60px", padding: "4px 2px"}}>${props.info.payment.toLocaleString("en", {minimumFractionDigits: 2,
  maximumFractionDigits: 2})}</td>
                        <td class="tableNumber" style={{flex: .5, textAlign: "center", width: "60px", padding: "4px 0px"}}>MI</td>
                        <td class="tableNumber" style={{flex: .75, textAlign: "center", width: "60px", padding: "4px 0px"}}>Extra</td>
                    </tr>
                {/* </tbody>
            </table> */}
            {/* <br /> */}
        </div>
    )
}

export default AmortizationTablesdisplay