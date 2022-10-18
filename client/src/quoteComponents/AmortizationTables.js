import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import AmortizationTablesdisplay from "./AmortizationTablescurrent.js"
import "./AmortizationTables.css"


function AmortizationTables() {

const context = useContext(MortgageContext)

    return (
        <div style={{display: "flex"}}>
            <div class="container">
                <div class="header">
                    Current Loan
                </div>
                <div class="leftSide">
                    Payment Count
                </div>
                <table class="table">
                    <tbody >
                        <tr class="table">
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Interest Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Over 5 Years</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Over 10 Years</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principle Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principle & Interest</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total MI Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Grand Total</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Years Remaining</td>
                            {/* <hr class="headerSection" style={{padding: "13px"}}/> */}
                        </tr>
                    </tbody>
                </table>
                <table class='tableValues'>
                    <tbody class='tableValues'>
                        <tr class='tableValues'>
                            <td class="values" >$testing</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bodyHeader">
                    <tbody class="bodyHeader">
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-evenly"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Balance</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Interest</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Principle</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Payment</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>MI</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Extra</td>
                        </tr>
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-between"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>0</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}></td>
                        </tr>
                    </tbody>
                </table>
                <div class="body">
                    Amort Table
                </div>
            </div>
            <div class="container" style={{float: "left"}}>
                <div class="header">
                    Best Rate / Higher Cost
                </div>
                <div class="leftSide">
                    
                </div>
                <table class="table">
                    <tbody >
                        <tr class="table">
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Interest Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Over 5 Years</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Over 10 Years</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principle Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principle & Interest</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total MI Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Grand Total</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Years Remaining</td>
                            {/* <hr class="headerSection" style={{padding: "13px"}}/> */}
                        </tr>
                    </tbody>
                </table>
                <table class='tableValues'>
                    <tbody class='tableValues'>
                        <tr class='tableValues'>
                            <td class="values" >$testing</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bodyHeader">
                    <tbody class="bodyHeader">
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-evenly"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Balance</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Interest</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Principle</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Payment</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>MI</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Extra</td>
                        </tr>
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-between"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>0</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}></td>
                        </tr>
                    </tbody>
                </table>
                <div class="body">
                    Amort Table
                </div>
            </div>
            <div class="container">
                <div class="header">
                    Better Rate / Moderate Cost
                </div>
                <div class="leftSide">
                    
                </div>
                <table class="table">
                    <tbody >
                        <tr class="table">
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Interest Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Over 5 Years</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Over 10 Years</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principle Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principle & Interest</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total MI Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Grand Total</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Years Remaining</td>
                            {/* <hr class="headerSection" style={{padding: "13px"}}/> */}
                        </tr>
                    </tbody>
                </table>
                <table class='tableValues'>
                    <tbody class='tableValues'>
                        <tr class='tableValues'>
                            <td class="values" >$testing</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bodyHeader">
                    <tbody class="bodyHeader">
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-evenly"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Balance</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Interest</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Principle</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Payment</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>MI</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Extra</td>
                        </tr>
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-between"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>0</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}></td>
                        </tr>
                    </tbody>
                </table>
                <div class="body">
                    Amort Table
                </div>
            </div>
            <div class="container">
                <div class="header">
                    Good Rate / Low Cost
                </div>
                <div class="leftSide">
                    
                </div>
                <table class="table">
                    <tbody >
                        <tr class="table">
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Interest Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Over 5 Years</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Over 10 Years</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principle Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principle & Interest</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total MI Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Grand Total</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Years Remaining</td>
                            {/* <hr class="headerSection" style={{padding: "13px"}}/> */}
                        </tr>
                    </tbody>
                </table>
                <table class='tableValues'>
                    <tbody class='tableValues'>
                        <tr class='tableValues'>
                            <td class="values" >$testing</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                            <td class="values" >$</td>
                        </tr>
                    </tbody>
                </table>
                <table class="bodyHeader">
                    <tbody class="bodyHeader">
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-evenly"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Balance</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Interest</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Principle</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Payment</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>MI</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>Extra</td>
                        </tr>
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-between"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>$</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}>0</td>
                            <td class="bodyHeader" style={{fontWeight: "bold"}}></td>
                        </tr>
                    </tbody>
                </table>
                <div class="body">
                    Amort Table
                </div>
            </div>
        </div>
    )
}

export default AmortizationTables