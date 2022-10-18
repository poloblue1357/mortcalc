import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import AmortizationTablesdisplay from "./AmortizationTablescurrent.js"
import "./AmortizationTables.css"


function AmortizationTables() {

const context = useContext(MortgageContext)

    return (
        <div class="container">
            <div class="header">
                Current Loan
            </div>
            <div class="leftSide">
                Payment Count
            </div>
            <table class="table">
                <tbody >
                    <tr >
                        <td class="headerSection" style={{fontWeight: "bold"}}>Total Interest Payments</td>
                        <td class="headerSection" style={{fontWeight: "bold"}}>Over 5 Years</td>
                        <td class="headerSection" style={{fontWeight: "bold"}}>Over 10 Years</td>
                        <td class="headerSection" style={{fontWeight: "bold"}}>Total Principle Payments</td>
                        <td class="headerSection" style={{fontWeight: "bold"}}>Total Principle & Interest</td>
                        <td class="headerSection" style={{fontWeight: "bold"}}>Total MI Payments</td>
                        <td class="headerSection" style={{fontWeight: "bold"}}>Grand Total</td>
                        <td class="headerSection" style={{fontWeight: "bold"}}>Years Remaining</td>
                    </tr>
                </tbody>
            </table>
            <div class="bodyHeader">
                <table class="bodyHeader">
                    <tbody>
                        <tr class="bodyHeader">
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Balance</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Interest</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Principle</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Payment</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>MI</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Extra</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="body">
                <hr />
                Body
            </div>
        </div>
    )
}

export default AmortizationTables