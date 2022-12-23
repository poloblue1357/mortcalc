import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"
import AmortizationTablescurrent from "./AmortizationTablescurrent.js"
import "./AmortizationTables.css"

// overflow: scroll. needs fixed height and width
// => div around mapped component
// carousel library

function AmortizationTables() {

const context = useContext(MortgageContext)
const {loanInput, getLoanInputs} = useContext(MortgageContext)

let bestTable = [
    {
        balance: loanInput.baseLoanAmount,
        interest: loanInput.bestRate, 
        payment: Math.round((loanInput?.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
    }
]
let q = true
let i = 0

whileLoop()
const p = bestTable.map((info, i) => {
    return <AmortizationTablescurrent info={info} key={i} i={i}/>
})

const [bestArr, setBestArr] =  useState([])

function whileLoop() {
    const payment = Math.round((loanInput?.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
    while(bestTable[bestTable.length - 1].balance >= 0) {
    // console.log("while loop")
        if(i === 0) {
            // setBestArr(bestTable)
            console.log("i = 0")
            i++
        } else {
            let interest = (bestTable[bestTable.length-1].balance * ((loanInput.bestRate / 100) / 12))
            const newObj = {
                balance: bestTable[bestTable.length - 1]?.balance - (payment - interest),
                payment,
                interest,
                principal: payment - interest
            }
            bestTable.push(newObj)
            // setBestArr(prevArr => ([...prevArr, newObj]))
            
        }
    }
    console.log("after while loop")
    bestTable.splice(0, 1)
}

function testing() {
    // console.log(bestArr, "bestArr")
    console.log(bestTable, "bestTable")
}
// reduce method for whole array, total of interest payments
// let i = 0
// while(bestArr[bestArr.length-1]?.balance >= 0) { 
//     // build array 
//     if ( i === 0 ) {
//         // initial calclation
//         setBestArr()
//     }
//     else {
//         const newObj = { 
//             balance: bestTable[i-1].balance + bestTable.principal

//         }
//         bestTable.push(newObj)
//         setBestArr(prev => ([...prev, newObj]))
//     }
// }

// 1 array of objects, with balance/interest/principal

    useEffect(() => {
        getLoanInputs()
    }, [])

    return (
        <div style={{display: "flex"}}>
            <div style={{display: "flex"}}>
            {/* <button onClick={testing}>TESTING</button>
            <button onClick={whileLoop}>While Loop</button> */}
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
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principal Payments</td>
                            <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principal & Interest</td>
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
                            <td class="values" >$</td>
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
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principal</td>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Payment</td>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: .5, textAlign: "center", width: "60px", padding: "0px 0px"}}>MI</td>
                            <td class="bodyHeader" style={{fontWeight: "bold", flex: .75, textAlign: "center", width: "60px", padding: "0px 0px"}}>Extra</td>
                        </tr>
                        <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>${loanInput.firstLoanBalance}</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 1px"}}>{loanInput.currentRate}%</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>$</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "0px 2px"}}>${loanInput.rentPayment}</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "0px 0px"}}>{loanInput.currentMI}</td>
                            <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "0px 0px"}}></td>
                        </tr>
                    </tbody>
                </table>
                {/* <hr class="hr"/> */}
                
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
                <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principal Payments</td>
                <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principal & Interest</td>
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
                <td class="values" >$</td>
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
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principal</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Payment</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: .5, textAlign: "center", width: "60px", padding: "0px 0px"}}>MI</td>
                <td class="bodyHeader" style={{fontWeight: "bold", flex: .75, textAlign: "center", width: "60px", padding: "0px 0px"}}>Extra</td>
            </tr>
            <tr class="bodyHeader" style={{display: "flex", justifyContent: "space-around"}}>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 1px"}}>${loanInput.baseLoanAmount}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 1px"}}>{loanInput.bestRate}%</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 2px"}}></td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 2px"}}>${Math.round((loanInput.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "4px 0px"}}>{((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "4px 0px"}}>{loanInput.additionalMonthlyBest}</td>
            </tr>
    {p}
        </tbody>
    </table>
    {/* <hr class="hr"/> */}
    {/* <AmortizationTablescurrent /> */}
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
                <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principal Payments</td>
                <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principal & Interest</td>
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
                <td class="values" >$</td>
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
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principal</td>
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
    {/* <AmortizationTablescurrent /> */}
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
                <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principal Payments</td>
                <td class="headerSection" style={{fontWeight: "bold", border: "1px black solid"}}>Total Principal & Interest</td>
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
                <td class="values" >$</td>
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
                <td class="bodyHeader" style={{fontWeight: "bold", flex: 1, textAlign: "center", width: "60px", padding: "0px 2px"}}>Principal</td>
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
    {/* <AmortizationTablescurrent /> */}
    <div class="rightSide"></div>
</div>
</div></div>
    )
}

export default AmortizationTables