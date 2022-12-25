import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"
import AmortizationTablesBest from "./AmortizationTablesBest.js"
import AmortizationTablesBetter from "./AmortizationTablesBetter.js"
import AmortizationTablesGood from "./AmortizationTablesGood.js"
import ATRightSide from "./ATRightSide"
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
    let betterTable = [
        {
            balance: loanInput.baseLoanAmount,
            interest: loanInput.betterRate, 
            payment: Math.round((loanInput?.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        }
    ]
    let goodTable = [
        {
            balance: loanInput.baseLoanAmount,
            interest: loanInput.betterRate, 
            payment: Math.round((loanInput?.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        }
    ]
    let rightTable = [
        {
            balance: loanInput.baseLoanAmount,
            interest: loanInput.betterRate, 
            payment: Math.round((loanInput?.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        }
    ]

    let i = 0
    let j = 0
    let k = 0
    let l = 0

    bestLoop()
    betterLoop()
    goodLoop()
    rightLoop()
    const p = bestTable.map((info, i) => {
        return <AmortizationTablesBest info={info} key={i} i={i}/>
    })
    const q = betterTable.map((info, j) => {
        return <AmortizationTablesBetter info={info} key={j} j={j}/>
    })
    const r = goodTable.map((info, k) => {
        return <AmortizationTablesGood info={info} key={k} k={k}/>
    })
    const s = goodTable.map((info, l) => {
        return <ATRightSide info={info} key={l} l={l}/>
    })
    function rightLoop() {
        const payment = Math.round((loanInput?.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        while(goodTable[goodTable.length - 1].balance >= 0) {
            if(l === 0) {
                l++
            } else {
                let interest = (goodTable[goodTable.length-1].balance * ((loanInput.goodRate / 100) / 12))
                const newObj = {
                    balance: goodTable[goodTable.length - 1]?.balance - (payment - interest),
                    payment,
                    interest,
                    principal: payment - interest
                }
                goodTable.push(newObj)
                // setBestArr(prevArr => ([...prevArr, newObj]))
            }
        }
        goodTable.splice(0, 1)
    }
    function goodLoop() {
        const payment = Math.round((loanInput?.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        while(goodTable[goodTable.length - 1].balance >= 0) {
            if(k === 0) {
                k++
            } else {
                let interest = (goodTable[goodTable.length-1].balance * ((loanInput.goodRate / 100) / 12))
                const newObj = {
                    balance: goodTable[goodTable.length - 1]?.balance - (payment - interest),
                    payment,
                    interest,
                    principal: payment - interest
                }
                goodTable.push(newObj)
                // setBestArr(prevArr => ([...prevArr, newObj]))
            }
        }
        // goodTable.splice(0, 1)
    }
    function betterLoop() {
        const payment = Math.round((loanInput?.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        while(betterTable[betterTable.length - 1].balance >= 0) {
            if(j === 0) {
                j++
            } else {
                let interest = (betterTable[betterTable.length-1].balance * ((loanInput.betterRate / 100) / 12))
                const newObj = {
                    balance: betterTable[betterTable.length - 1]?.balance - (payment - interest),
                    payment,
                    interest,
                    principal: payment - interest
                }
                betterTable.push(newObj)
                // setBestArr(prevArr => ([...prevArr, newObj]))
            }
        }
        betterTable.splice(0, 1)
    }
    function bestLoop() {
        const payment = Math.round((loanInput?.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        while(bestTable[bestTable.length - 1].balance >= 0) {
            if(i === 0) {
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
        bestTable.splice(0, 1)
    }

    let bestTI = Math.round((bestTable.reduce((accumulator, currentValue) => +accumulator + +currentValue.interest, 0)) * 100) / 100
    let betterTI = Math.round((betterTable.reduce((accumulator, currentValue) => +accumulator + +currentValue.interest, 0)) * 100) / 100
    let goodTI = Math.round((goodTable.reduce((accumulator, currentValue) => +accumulator + +currentValue.interest, 0)) * 100) / 100
    
    let m = []
    function asdf() {
        for(let i = 0; i < 60; i++) {
            m.push(bestTable[i]?.interest)
        }
    }
    asdf()
    let n = []
    function qwer() {
        for(let i = 0; i < 120; i++) {
            n.push(bestTable[i]?.interest)
        }
    }
    qwer()
    let best5 = 0;
    for(const value of m) {
        best5 += value;
    }
    let best10 = 0;
    for(const value of n) {
        best10 += value;
    }

    let m1 = []
    function asdf1() {
        for(let i = 0; i < 60; i++) {
            m1.push(betterTable[i]?.interest)
        }
    }
    asdf1()
    let n1 = []
    function qwer1() {
        for(let i = 0; i < 120; i++) {
            n1.push(betterTable[i]?.interest)
        }
    }
    qwer1()
    let better5 = 0;
    for(const value of m1) {
        better5 += value;
    }
    let better10 = 0;
    for(const value of n1) {
        better10 += value;
    }

    let m2 = []
    function asdf2() {
        for(let i = 0; i < 60; i++) {
            m2.push(goodTable[i]?.interest)
        }
    }
    asdf2()
    let n2 = []
    function qwer2() {
        for(let i = 0; i < 120; i++) {
            n2.push(goodTable[i]?.interest)
        }
    }
    qwer2()
    let good5 = 0;
    for(const value of m2) {
        good5 += value;
    }
    let good10 = 0;
    for(const value of n2) {
        good10 += value;
    }

    function testing() {
        // console.log(m)
        console.log(bestTable)
    }

    useEffect(() => {
        getLoanInputs()
    }, [])

    return (
        <div style={{display: "flex"}}>
            <div style={{display: "flex"}}>
            <button onClick={testing}>TESTING</button>
            {/* <button onClick={whileLoop}>While Loop</button> */}
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
                <td class="values" >${bestTI.toLocaleString("en")}</td>
                <td class="values" >${(Math.round((best5) * 100) / 100).toLocaleString("en")}</td>
                <td class="values" >${(Math.round((best10) * 100) / 100).toLocaleString("en")}</td>
                <td class="values" >${loanInput.baseLoanAmount.toLocaleString("en")}</td>
                <td class="values" >${(+loanInput.baseLoanAmount + +bestTI).toLocaleString("en")}</td>
                <td class="values" >$</td>
                <td class="values" >${(+loanInput.baseLoanAmount + +bestTI).toLocaleString("en")}</td>
                <td class="values" >{loanInput.loanTerm / 12}</td>
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
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 1px"}}>${(loanInput.baseLoanAmount).toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 1px"}}>{(loanInput.bestRate).toLocaleString("en")}%</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 2px"}}></td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 2px"}}>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "4px 0px"}}>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "4px 0px"}}>{(loanInput.additionalMonthlyBest)}</td>
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
                <td class="values" >${betterTI.toLocaleString("en")}</td>
                <td class="values" >${(Math.round((better5) * 100) / 100).toLocaleString("en")}</td>
                <td class="values" >${(Math.round((better10) * 100) / 100).toLocaleString("en")}</td>
                <td class="values" >${loanInput.baseLoanAmount.toLocaleString("en")}</td>
                <td class="values" >${(+loanInput.baseLoanAmount + +betterTI).toLocaleString("en")}</td>
                <td class="values" >$</td>
                <td class="values" >${(+loanInput.baseLoanAmount + +betterTI).toLocaleString("en")}</td>
                <td class="values" >{loanInput.loanTerm / 12}</td>
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
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 1px"}}>${loanInput.baseLoanAmount.toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 1px"}}>{loanInput.betterRate}%</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 2px"}}></td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 2px"}}>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "4px 0px"}}>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "4px 0px"}}>{loanInput.additionalMonthlyBetter}</td>
            </tr>
            {q}
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
                <td class="values" >${goodTI.toLocaleString("en")}</td>
                <td class="values" >${(Math.round((good5) * 100) / 100).toLocaleString("en")}</td>
                <td class="values" >${(Math.round((good10) * 100) / 100).toLocaleString("en")}</td>
                <td class="values" >${loanInput.baseLoanAmount.toLocaleString("en")}</td>
                <td class="values" >${(+loanInput.baseLoanAmount + +goodTI).toLocaleString("en")}</td>
                <td class="values" >$</td>
                <td class="values" >${(+loanInput.baseLoanAmount + +goodTI).toLocaleString("en")}</td>
                <td class="values" >{loanInput.loanTerm / 12}</td>
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
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 1px"}}>${loanInput.baseLoanAmount.toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 1px"}}>{loanInput.goodRate}%</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 2px"}}></td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: 1, justifyContent: "center", width: "60px", padding: "4px 2px"}}>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .5, justifyContent: "center", width: "60px", padding: "4px 0px"}}>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString("en")}</td>
                <td class="bodyHeader" style={{display: "flex", fontWeight: "bold", flex: .75, justifyContent: "center", width: "60px", padding: "4px 0px"}}>{loanInput.additionalMonthlyGood}</td>
            </tr>
            {r}
        </tbody>
    </table>
    {/* <hr class="hr"/> */}
    {/* <AmortizationTablescurrent /> */}
    <div class="rightSide"></div>
    {s}
</div>
</div></div>
    )
}

export default AmortizationTables