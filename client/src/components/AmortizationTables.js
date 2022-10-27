import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import AmortizationTablescurrent from "./AmortizationTablescurrent.js"
import "./AmortizationTables.css"


function AmortizationTables() {

const context = useContext(MortgageContext)

    return (
        <div style={{display: "flex"}}>
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
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Balance</td>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Interest</td>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principle</td>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Payment</td>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: .5, textAlign: "center", width: "60px", padding: "0px 0px"}}>MI</td>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: .75, textAlign: "center", width: "60px", padding: "0px 0px"}}>Extra</td>
                        </tr>
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>$</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>$</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "0px 0px"}}>0</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "0px 0px"}}></td>
                        </tr>
                    </tbody>
                </table>
                {/* <hr class="hr"/> */}
                <AmortizationTablescurrent />
            </div>
            </div>
            <div style={{display: "flex"}}>

<div class="container">
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
            <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Balance</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Interest</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principle</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Payment</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: .5, textAlign: "center", width: "60px", padding: "0px 0px"}}>MI</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: .75, textAlign: "center", width: "60px", padding: "0px 0px"}}>Extra</td>
            </tr>
            <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "0px 0px"}}>0</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "0px 0px"}}></td>
            </tr>
        </tbody>
    </table>
    {/* <hr class="hr"/> */}
    <AmortizationTablescurrent />
</div>
</div>
<div style={{display: "flex"}}>

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
            <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Balance</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Interest</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principle</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Payment</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: .5, textAlign: "center", width: "60px", padding: "0px 0px"}}>MI</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: .75, textAlign: "center", width: "60px", padding: "0px 0px"}}>Extra</td>
            </tr>
            <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "0px 0px"}}>0</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "0px 0px"}}></td>
            </tr>
        </tbody>
    </table>
    {/* <hr class="hr"/> */}
    <AmortizationTablescurrent />
</div>
</div>
<div style={{display: "flex"}}>

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
            <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Balance</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 1px"}}>Interest</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principle</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Payment</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: .5, textAlign: "center", width: "60px", padding: "0px 0px"}}>MI</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: .75, textAlign: "center", width: "60px", padding: "0px 0px"}}>Extra</td>
            </tr>
            <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "0px 0px"}}>0</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "0px 0px"}}></td>
            </tr>
        </tbody>
    </table>
    {/* <hr class="hr"/> */}
    <AmortizationTablescurrent />
    <div class="rightSide"></div>
</div>
</div></div>
    )
}

export default AmortizationTables