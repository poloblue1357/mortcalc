import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import AmortizationTablesdisplay from "./AmortizationTablescurrent.js"


function AmortizationTables() {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Amortization Tables</h1>
            
            <table>
                <tbody style={{display: "flex"}}>
                <h3 style={{padding: "10px"}}>Current Loan</h3>
                    <tr style={{display: "grid"}}>
                        <td style={{border: "solid 1px black"}}>Total Interest Payments</td>
                        <td style={{border: "solid 1px black"}}>Over 5 Years</td>
                        <td style={{border: "solid 1px black"}}>Over 10 Years</td>
                        <td style={{border: "solid 1px black"}}>Total Principle Payments</td>
                        <td style={{border: "solid 1px black"}}>Total Principle & Interest</td>
                        <td style={{border: "solid 1px black"}}>Total MI Payments</td>
                        <td style={{border: "solid 1px black"}}>Grand Total</td>
                        <td style={{border: "solid 1px black"}}> Years Remaining</td>
                    </tr>
                    <tr style={{display: "grid"}}>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <h5 style={{ textOrientation: "upright", padding: "5px"}}>Payment <br /> Count</h5>
                        <td style={{padding: "10px"}}>Balance</td>
                        <td style={{padding: "10px"}}>Interest</td>
                        <td style={{padding: "10px"}}>Principle</td>
                        <td style={{padding: "10px"}}>Payment</td>
                        <td style={{padding: "10px"}}>MI</td>
                        <td style={{padding: "10px"}}>Extra</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AmortizationTables