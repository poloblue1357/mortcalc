import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import "./RefinanceQuote.css"
import beamLogo from "./beamlogo.png"
import contactInfo from "./contactinfo.png"
import customQuotes from "./custom quotes.png"
import pfp from "./pfp.png"

function RefinanceQuote() {

    const context = useContext(MortgageContext)
    const {loanInput, getLoanInputs, getTitleFeesData, userAxios, setGetFeeSetupData, setGetTitleFeesData, getFeeSetupData} = useContext(MortgageContext)
    
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`

    useEffect(() => {
        userAxios.get("/api/feesetup")
            .then(res => {
                setGetFeeSetupData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        userAxios.get("/api/titlefees")
            .then(res => {
                setGetTitleFeesData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const x = getFeeSetupData?.find(data => {
        return data.feeScenario === loanInput.loanType 
    })
    useEffect(() => {
        getLoanInputs()
    }, [])

    let currentTable = [
        {
            balance: loanInput.firstLoanBalance || 0,
            interest: loanInput.currentRate || 0,
            payment: loanInput.rentPayment || 0,
            MI: loanInput.currentMI || 0,
            // extra
        }
    ]
    let bestTable = [
        {
            balance: loanInput.baseLoanAmount,
            interest: loanInput.bestRate, 
            payment: Math.round((loanInput?.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100,
            MI: ((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12,
            extra: loanInput.additionalMonthlyBest
        }
    ]
    let betterTable = [
        {
            balance: loanInput.baseLoanAmount,
            interest: loanInput.betterRate, 
            payment: Math.round((loanInput?.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100,
            MI: ((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12,
            extra: loanInput.additionalMonthlyBetter
        }
    ]
    let goodTable = [
        {
            balance: loanInput.baseLoanAmount,
            interest: loanInput.betterRate, 
            payment: Math.round((loanInput?.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100,
            MI: ((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12,
            extra: loanInput.additionalMonthlyGood
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
    let c = 0
    bestLoop()
    betterLoop()
    goodLoop()
    rightLoop()
    currentLoop()
    // const p = bestTable.map((info, i) => {
    //     return <AmortizationTablesBest info={info} key={i} i={i}/>
    // })
    // const q = betterTable.map((info, j) => {
    //     return <AmortizationTablesBetter info={info} key={j} j={j}/>
    // })
    // const r = goodTable.map((info, k) => {
    //     return <AmortizationTablesGood info={info} key={k} k={k}/>
    // })
    // const s = goodTable.map((info, l) => {
    //     return <ATRightSide info={info} key={l} l={l}/>
    // })
    // const t = currentTable.map((info, c) => {
    //     return <AmortizationTablesCurrent info={info} key={c} c={c}/>
    // })
    function currentLoop() {
        const payment = Math.round((loanInput.firstLoanBalance * ((((loanInput.currentRate / 100) / 12) * (1 + ((loanInput.currentRate / 100) / 12))**(loanInput.term)) / ((1 + ((loanInput.currentRate / 100) / 12))**(loanInput.term) - 1))) * 100) / 100
        const mortgageInsurance = ((loanInput.monthlyMIFactor * loanInput.firstLoanBalance) / 100) / 12
        while(currentTable[currentTable.length - 1].balance >= 0) {
            if(c === 0) {
                c++
            } else {
                let interest = (currentTable[currentTable.length-1].balance * ((loanInput.currentRate / 100) / 12))
                const newObj = {
                    balance: currentTable[currentTable.length - 1]?.balance - (payment - interest),
                    payment,
                    interest,
                    principal: payment - interest,
                    MI: ((mortgageInsurance[c] > (loanInput.appraisedValue * 0.8)) ?  currentTable[c - 1].MI : 0),
                    extra: currentTable[c - 1].extra
                }
                currentTable.push(newObj)
                // setBestArr(prevArr => ([...prevArr, newObj]))
            }
        }
        currentTable.splice(0, 1)
    }
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
        const mortgageInsurance = ((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12
        while(goodTable[goodTable.length - 1].balance >= 0) {
            if(k === 0) {
                k++
            } else {
                let interest = (goodTable[goodTable.length-1].balance * ((loanInput.goodRate / 100) / 12))
                const newObj = {
                    balance: goodTable[goodTable.length - 1]?.balance - (payment - interest),
                    payment,
                    interest,
                    principal: payment - interest,
                    MI: ((mortgageInsurance[k] > (loanInput.appraisedValue * 0.8)) ?  goodTable[k - 1].MI : 0),
                    extra: goodTable[k - 1].extra
                }
                goodTable.push(newObj)
                // setBestArr(prevArr => ([...prevArr, newObj]))
            }
        }
        // goodTable.splice(0, 1)
    }
    function betterLoop() {
        const payment = Math.round((loanInput?.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        const mortgageInsurance = ((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12
        while(betterTable[betterTable.length - 1].balance >= 0) {
            if(j === 0) {
                j++
            } else {
                let interest = (betterTable[betterTable.length-1].balance * ((loanInput.betterRate / 100) / 12))
                const newObj = {
                    balance: betterTable[betterTable.length - 1]?.balance - (payment - interest),
                    payment,
                    interest,
                    principal: payment - interest,
                    MI: ((mortgageInsurance[j] > (loanInput.appraisedValue * 0.8)) ?  betterTable[j - 1].MI : 0),
                    extra: betterTable[j - 1].extra
                }
                betterTable.push(newObj)
                // setBestArr(prevArr => ([...prevArr, newObj]))
            }
        }
        betterTable.splice(0, 1)
    }
    function bestLoop() {
        const payment = Math.round((loanInput?.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100
        const mortgageInsurance = ((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12
        while(bestTable[bestTable.length - 1].balance >= 0) {
            if(i === 0) {
                i++
            } else {
                let interest = (bestTable[bestTable.length-1].balance * ((loanInput.bestRate / 100) / 12))
                const newObj = {
                    balance: bestTable[bestTable.length - 1]?.balance - (payment - interest),
                    payment,
                    interest,
                    principal: payment - interest,
                    MI: ((mortgageInsurance[i] > (loanInput.appraisedValue * 0.8)) ?  bestTable[i - 1].MI : 0),
                    extra: bestTable[i - 1].extra
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
    let currentTI = Math.round((currentTable.reduce((accumulator, currentValue) => +accumulator + +currentValue.interest, 0)) * 100) / 100
    
    let pmtArr = []
    function pmtArr1() {
        for(let i = 0; i < currentTable.length; i++) {
            pmtArr.push(currentTable[i].payment)
        }

    }
    pmtArr1()
    let ct = []
    let current5 = 0;
    function ct1() {
        if(currentTable[0].interest !== 0 ) {
            for(let i = 0; i < 60; i++) {
                ct.push(currentTable[i]?.interest)
            }
            for(const value of ct) {
                current5 += value;
            }
        }
    }
    ct1()
    let ct2 = []
    function ct3() {
        if(currentTable[0].interest !== 0) {
            for(let i = 0; i < 120; i++) {
                ct2.push(currentTable[i]?.interest)
            }
        }
    }
    ct3()
    let current10 = 0;
    for(const value of ct2) {
        current10 += value;
    }
    let cl = []
    function cl1() {
        for(let i = 0; i <currentTable.length; i++) {
            cl.push(currentTable[i].MI)
        }
    }
    cl1()
    let mn4 = []
    function mn5() {
        for(let i = 0; i <goodTable.length; i++) {
            mn4.push(goodTable[i].MI)
        }
    }
    mn5()
    let mn2 = []
    function mn3() {
        for(let i = 0; i <betterTable.length; i++) {
            mn2.push(betterTable[i].MI)
        }
    }
    mn3()
    let mn = []
    function mn1() {
        for(let i = 0; i <bestTable.length; i++) {
            mn.push(bestTable[i].MI)
        }
    }
    mn1()
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
    let currentMI = 0
    for(const value of cl) {
        currentMI += value
    }
    let goodMI = 0
    for(const value of mn4) {
        goodMI += value
    }
    let betterMI = 0
    for(const value of mn2) {
        betterMI += value
    }
    let bestMI = 0
    for(const value of mn) {
        bestMI += value
    }
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
        console.log("test")
    }
    return (
        <div>
            {/* <button onClick={() => testing()}>Test</button> */}
            <h1>Refinance Quote</h1>
            <div class="parent">
                {/* <div class="one"> */}
                <div class="oneOne">
                        <img style={{height: 140, width: 270, backgroundColor: "#334960"}} src={beamLogo}/>
                    </div>
                    <div class="oneTwo"> 
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", alignItems: "flex-end", fontSize: "29px", fontFamily: "sans-serif"}}>Custom Quote <br /> Analysis For:</div>
                        <div style={{backgroundColor: "#334960", fontSize: "14px", alignItems: "bottom"}}>This is not a loan estimate*</div>
                    </div>
                    <div class="oneThree">
                        <div style={{backgroundColor: "#334960", fontSize: "26px"}}>Morgan Brush</div>
                        <div style={{backgroundColor: "#334960"}}>Date: {date}</div>
                    </div>
                    <div class="oneFour">
                            <div style={{backgroundColor: "#334960"}}>Prepared by <br /></div>
                            <div style={{backgroundColor: "#334960", fontSize: "30px"}}>Chris Buckway <br /></div>
                            <div style={{backgroundColor: "#334960"}}>Mortgage Loan Officer <br /></div>
                            <div style={{backgroundColor: "#334960", fontSize: "15px"}}>chrisbuckway@beamlending.com </div>
                            <div style={{backgroundColor: "#334960"}}>(801) 786-9837</div>
                    </div>
                    <div class="oneFive">
                        <img style={{height: 130, width: 160, backgroundColor: "#334960"}} src={pfp}/>
                        <br />
                        <div style={{backgroundColor: "#334960", display: "flex", fontSize: "14px"}}>NMLS# 1097309</div>
                    </div>
                {/* </div> */}
                <div class="oneYellow">
                    Comparing Your Current Loan With Our Loan Offers
                </div>
                <div class="two">
                    <div class="twoOne">
                        <div>&nbsp;</div>
                        <div>Loan Amount</div>
                        <div>Remaining Years</div>
                    </div>
                    <div class="twoTwo">
                        <div style={{fontSize: "17px", fontWeight: "bold"}}>Current Loan</div>
                        <div>{loanInput.firstLoanBalance ? <div>${loanInput.firstLoanBalance.toLocaleString("en")}</div> : <div>&nbsp;</div>}</div>
                        <div>{pmtArr ? Math.round(pmtArr.length / 12) : 0}</div>
                    </div>
                    <div class="twoThree">
                        <div style={{fontSize: "17px"}}>Best Rate / Higher Cost</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>{loanInput.loanTerm / 12}</div>
                    </div>
                    <div class="twoFour">
                        <div style={{fontSize: "17px"}}>Better Rate / Moderate Cost</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>{loanInput.loanTerm / 12}</div>
                    </div>
                    <div class="twoFive">
                        <div style={{fontSize: "17px"}}>Good Rate / Low Cost</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>{loanInput.loanTerm / 12}</div>
                    </div>
                </div> 
                <div class="twoVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Loan Terms</div>
                <div class="twoHorizontal">
                    <div style={{justifyContent: "flex-end"}}>Interest Rate</div>
                    <div>&nbsp;</div>
                    <div>{loanInput.bestRate ? <div>{loanInput.bestRate}%</div> : <div>&nbsp;</div>}</div>
                    <div>{loanInput.betterRate ? <div>{loanInput.betterRate}%</div> : <div>&nbsp;</div>}</div>
                    <div>{loanInput.goodRate ? <div>{loanInput.goodRate}%</div> : <div>&nbsp;</div>}</div>
                </div>
                <div class="three">
                    <div class="threeOne">
                        <div>Principal & Interest</div>
                        <div>Mortgage Insurance</div>
                        <div>Add Taxes & Insurance</div>
                        <div>Extra Principal Payment</div>
                    </div>
                    <div class="threeTwo">
                        <div>{loanInput.rentPayment ? <div>${loanInput.rentPayment.toLocaleString("en")}</div> : "Unknown"}</div>
                        <div>{loanInput.currentMI ? <div>${loanInput.currentMI.toLocaleString("en")}</div> : "Unknown"}</div>
                        <div>{loanInput.currentEscrow ? <div>${loanInput.currentEscrow.toLocaleString("en")}</div> : "Unknown"}</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="threeThree">
                        <div>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</div>
                        <div>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString()}</div>
                        <div>${(+loanInput.monthlyTaxes + +loanInput.monthlyInsurance).toLocaleString()}</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="threeFour">
                        <div>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</div>
                        <div>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString()}</div>
                        <div>${(+loanInput.monthlyTaxes + +loanInput.monthlyInsurance).toLocaleString()}</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="threeFive">
                        <div>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</div>
                        <div>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString()}</div>
                        <div>${(+loanInput.monthlyTaxes + +loanInput.monthlyInsurance).toLocaleString()}</div>
                        <div>&nbsp;</div>
                    </div>
                </div>
                <div class="threeVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Payment Breakdown</div>

                <div class="threeHorizontal1"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>House Payment</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>Monthly P&I / MI Savings**</div></div></div>
                <div class="threeHorizontal2"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>${(loanInput.rentPayment + loanInput.currentMI + loanInput.currentEscrow).toLocaleString()}</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>${(loanInput.rentPayment + loanInput.currentMI + loanInput.currentEscrow).toLocaleString()}</div></div> </div>
                <div class="threeHorizontal3"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>
                    ${((Math.round((loanInput.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)).toLocaleString()}</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>${((loanInput.rentPayment + loanInput.currentMI) - ((Math.round((loanInput.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12))).toLocaleString()}</div></div></div>
                <div class="threeHorizontal4"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>${((Math.round((loanInput.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)).toLocaleString()}</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>${((loanInput.rentPayment + loanInput.currentMI) - ((Math.round((loanInput.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12))).toLocaleString()}</div></div></div>
                <div class="threeHorizontal5"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>${((Math.round((loanInput.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)).toLocaleString()}</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>${((loanInput.rentPayment + loanInput.currentMI) - ((Math.round((loanInput.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12))).toLocaleString()}</div></div></div>

                <div class="four">
                    <div class="fourOne">
                        <div>Total Remaining Interest</div>
                        <div>Total Remaining MI Payments</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="fourTwo">
                        <div>${currentTI.toLocaleString("en")}</div>
                        <div>&nbsp;</div>
                        <div style={{fontWeight: "bold"}}>&nbsp;</div>
                        <div style={{fontWeight: "bold"}}>&nbsp;</div>
                    </div>
                    <div class="fourThree">
                        <div>${bestTI.toLocaleString("en")}</div>
                        <div>${bestMI.toLocaleString("en")}</div>
                        <div>${(((Math.round((current5) * 100) / 100) - (Math.round((best5) * 100) / 100)) + (currentMI - bestMI)).toLocaleString()}</div>
                        <div>{(((Math.round((current10) * 100) / 100) - (Math.round((best10) * 100) / 100)) + (currentMI - bestMI)).toLocaleString()}</div>
                    </div>
                    <div class="fourFour">
                        <div>${betterTI.toLocaleString("en")}</div>
                        <div>${betterMI.toLocaleString("en")}</div>
                        <div>${(((Math.round((current5) * 100) / 100) - (Math.round((better5) * 100) / 100)) + (currentMI - betterMI)).toLocaleString()}</div>
                        <div>{(((Math.round((current10) * 100) / 100) - (Math.round((better10) * 100) / 100)) + (currentMI - betterMI)).toLocaleString()}</div>
                    </div>
                    <div class="fourFive">
                        <div>${goodTI.toLocaleString("en")}</div>
                        <div>${goodMI.toLocaleString("en")}</div>
                        <div>${(((Math.round((current5) * 100) / 100) - (Math.round((good5) * 100) / 100)) + (currentMI - goodMI)).toLocaleString()}</div>
                        <div>{(((Math.round((current10) * 100) / 100) - (Math.round((good10) * 100) / 100)) + (currentMI - goodMI)).toLocaleString()}</div>
                    </div>
                </div>
                <div class="fourSix">
                    <div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>Savings over 5 years</div>
                    <div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>Savings over 10 years</div>
                </div>
                <div class="fourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Long Term Savings</div>
                <div class="fourHorizontal" style={{gridColumn: "2 / 4"}}>Savings Over Life of Loan</div>
                <div class="fourHorizontal" style={{gridColumn: "4 / 5"}}>${((currentTI - bestTI) + (currentMI - bestMI)).toLocaleString()}</div>
                <div class="fourHorizontal" style={{gridColumn: "5 / 6"}}>${((currentTI - betterTI) + (currentMI - betterMI)).toLocaleString()}</div>
                <div class="fourHorizontal" style={{gridColumn: "6 / 7"}}>${((currentTI - goodTI) + (currentMI - goodMI)).toLocaleString()}</div>

                <div class="fiveOne" style={{display: "grid", gridColumn: "2 / 4", gridRow: "9 / 10"}}>
                    <div style={{fontWeight: "bold", fontSize: "18px", marginTop: 3}}>Beam Lending Costs</div>
                    <div>Origination</div>
                    <div>Lender Credit/Discount</div>
                    <div>Underwriting</div>
                    <div>Tax Service</div>
                    <div>Credit Report</div>
                    <div>Flood Certificate</div>
                    <div>Appraisal</div>
                    <br />
                    <div style={{fontWeight: "bold", fontSize: "18px"}}>Title Company Fees</div>
                    <div style={{fontSize: "14px", marginBottom: 3}}>Funding Fee / Upfront Mortgage Insurance (if applicable)</div>
                </div>
                <div class="five">
                    <div class="fiveThree">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${(((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal).toLocaleString()}</div>
                        <div>${((x?.origination / 100) * loanInput.baseLoanAmount).toLocaleString()}</div>
                        <div>${((loanInput.creditDiscountBest * loanInput.baseLoanAmount) / 100) + loanInput.additionalBest}</div>
                        <div>${x?.underwriting}</div>
                        <div>${x?.taxService}</div>
                        <div>${x?.creditReport}</div>
                        <div>${x?.flood}</div>
                        <div>${x?.appraisal}</div>
                        <br />
                        <div style={{fontWeight: "bold", fontSize: "16px"}}>${(+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording).toLocaleString()}</div>
                        <div style={{marginBottom: 3}}>${(loanInput.baseLoanAmount * loanInput.ufmipPercent ? loanInput.baseLoanAmount * loanInput.ufmipPercent : "0").toLocaleString()}</div>
                    </div>
                    <div class="fiveFour">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${(((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal).toLocaleString()}</div>
                        <div>${((x?.origination / 100) * loanInput.baseLoanAmount).toLocaleString()}</div>
                        <div>${((loanInput.creditDiscountBest * loanInput.baseLoanAmount) / 100) + loanInput.additionalBest}</div>
                        <div>${x?.underwriting}</div>
                        <div>${x?.taxService}</div>
                        <div>${x?.creditReport}</div>
                        <div>${x?.flood}</div>
                        <div>${x?.appraisal}</div>
                        <br />
                        <div style={{fontWeight: "bold", fontSize: "16px"}}>${(+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording).toLocaleString()}</div>
                        <div style={{marginBottom: 3}}>${(loanInput.baseLoanAmount * loanInput.ufmipPercent ? loanInput.baseLoanAmount * loanInput.ufmipPercent : "0").toLocaleString()}</div>
                    </div>
                    <div class="fiveFive">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${(((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal).toLocaleString()}</div>
                        <div>${((x?.origination / 100) * loanInput.baseLoanAmount).toLocaleString()}</div>
                        <div>${((loanInput.creditDiscountBest * loanInput.baseLoanAmount) / 100) + loanInput.additionalBest}</div>
                        <div>${x?.underwriting}</div>
                        <div>${x?.taxService}</div>
                        <div>${x?.creditReport}</div>
                        <div>${x?.flood}</div>
                        <div>${x?.appraisal}</div>
                        <br />
                        <div style={{fontWeight: "bold", fontSize: "16px"}}>${(+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording).toLocaleString()}</div>
                        <div style={{marginBottom: 3}}>${(loanInput.baseLoanAmount * loanInput.ufmipPercent ? loanInput.baseLoanAmount * loanInput.ufmipPercent : "0").toLocaleString()}</div>
                    </div>
                </div>
                <div class="fiveVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Closing Cost Breakdown</div>

                <div class="fiveHorizontal1" style={{backgroundColor: "#6fa8dc", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center", fontWeight: "bold"}}>Total Closing Costs</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc", marginBottom: 3}}>Years to Break Even on Closing Costs</div></div></div>
                <div class="fiveHorizontal3" style={{backgroundColor: "#6fa8dc", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center", fontWeight: "bold"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc", marginBottom: 3}}>{Math.round((((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)) / ((Math.round((loanInput.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)) / 12) * 10) / 10}</div></div></div>
                <div class="fiveHorizontal4" style={{backgroundColor: "#6fa8dc", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center", fontWeight: "bold"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc", marginBottom: 3}}>{Math.round((((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)) / ((Math.round((loanInput.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)) / 12) * 10) / 10}</div></div></div>
                <div class="fiveHorizontal5" style={{backgroundColor: "#6fa8dc", fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center", fontWeight: "bold"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc", marginBottom: 3}}>{Math.round((((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)) / ((Math.round((loanInput.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)) / 12) * 10) / 10}</div></div></div>

                <div class="sixOne" style={{display: "grid", gridColumn: "2 / 4", gridRow: "11 / 12"}}>
                    <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>Total Closing Costs</div>
                    <div style={{fontSize: "16px", fontWeight: "bold"}}>Plus Payoff of Prior Loan(s)</div>
                    <div style={{fontSize: "16px", fontWeight: "bold"}}>Plus Money for YOUR New Escrow Account & Prepaids</div>
                    <div>Taxes</div>
                    <div>Insurance</div>
                    <div>Prepaid Interest</div>
                    <div style={{fontSize: "16px", fontWeight: "bold"}}>Minus Your New Loan Amount</div>
                </div>
                <div class="six">
                    {/* <div class="pfiveTwo"></div> */}
                    <div class="sixThree">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${loanInput.purchasePrice.toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.bestRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100).toLocaleString()}</div>
                        <div>${loanInput.monthlyTaxes * loanInput?.reservesTaxes}</div>
                        <div>${(loanInput.monthlyInsurance * loanInput?.reservesInsurance).toLocaleString()}</div>
                        <div>${Math.round(((Math.round(((+loanInput.bestRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100}</div> 
                        <div style={{fontWeight: "bold"}}>${loanInput.baseLoanAmount.toLocaleString()}</div>   
                    </div> 
                    <div class="sixFour">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${loanInput.purchasePrice.toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.betterRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100).toLocaleString()}</div>
                        <div>${loanInput.monthlyTaxes * loanInput?.reservesTaxes}</div>
                        <div>${(loanInput.monthlyInsurance * loanInput?.reservesInsurance).toLocaleString()}</div>
                        <div>${Math.round(((Math.round(((+loanInput.betterRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100}</div>
                        <div style={{fontWeight: "bold"}}>${loanInput.baseLoanAmount.toLocaleString()}</div>
                    </div>
                    <div class="sixFive">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${loanInput.purchasePrice.toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.goodRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100).toLocaleString()}</div>
                        <div>${loanInput.monthlyTaxes * loanInput?.reservesTaxes}</div>
                        <div>${(loanInput.monthlyInsurance * loanInput?.reservesInsurance).toLocaleString()}</div>
                        <div>${Math.round(((Math.round(((+loanInput.goodRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100}</div>
                        <div style={{fontWeight: "bold"}}>${loanInput.baseLoanAmount.toLocaleString()}</div>
                    </div>
                </div>
                <div class="sixVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Cash Needed to Close</div>
                <div class="sixHorizontal" style={{gridColumn: "2 / 4"}}>Total Cash to Close / Cash Back</div>
                <div class="sixHorizontal" style={{gridColumn: "4 / 5"}}>${(((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)) + (loanInput.purchasePrice) + (Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.bestRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100) - (loanInput.baseLoanAmount)).toLocaleString()}</div>
                <div class="sixHorizontal" style={{gridColumn: "5 / 6"}}>${(((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)) + (loanInput.purchasePrice) + (Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.betterRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100) - (loanInput.baseLoanAmount)).toLocaleString()}</div>
                <div class="sixHorizontal" style={{gridColumn: "6 / 7"}}>${(((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)) + (loanInput.purchasePrice) + (Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.goodRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100) - (loanInput.baseLoanAmount)).toLocaleString()}</div>

                <div class="sevenOne">
                    <p style={{backgroundColor: "white", fontSize: "15px", marginLeft: 5}}>Your actual rate, payment, and costs could be higher.  Get an official Loan Estimate before choosing a loan.</p>
                    <p style={{backgroundColor: "white", fontSize: "12px", marginLeft: 5}}>*The Information provided herein reflects estimates of the charges which you would likely incur should you be approved for a loan. This is not a Loan Estimate required by Federal Law. If you make an application, your Loan Estimate will be sent to you in the opening package. This is not a commitment to lend, nor is it a rate lock, prequalification or pre-approval. This estimate is intended to assist you in evaluating a loan or home purchase using estimated closing and property costs. Closing and settlement cost, reserve deposits, Interest rate and APR are subject to change and the estimates shown above may be more or less depending on factors such as down payment, property type, appraisal and occupancy. Housing costs will vary depending on location, homeowner’s association dues, local and state fees, taxes, and hazard and mortgage insurance. You may wish to compare these estimated charges in considering the total cost of your mortgage.</p>
                </div>
                <div class="sevenTwo">
                    <p style={{backgroundColor: "white", fontSize: "16px"}}>Notes:</p>
                </div>
                
            </div>
        </div>
    )
}

export default RefinanceQuote