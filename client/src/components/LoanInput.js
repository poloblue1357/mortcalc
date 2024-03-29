import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"

function LoanInput() {

    const context = useContext(MortgageContext)

    const {pcInput, editLoanInput, getLoanInputs, loanInput, getFeeSetupData, userAxios, setGetFeeSetupData, getTitleFeesData, setGetTitleFeesData, setGetLoanInput, handleSubmitLoanInput} = useContext(MortgageContext)

    const testing = () => {
        console.log(
            "localLI state",
            // getFeeSetupData,
            localLI,
            // x
        )
    }
    const [clearInputs, setClearInputs] = useState()
    const clear =() => {
        console.log("clear")
        setLocalLI({name: "", address: "", phone: "", email: "", loanPurpose: "", currentRate: "", currentEscrow: "", rentPayment: "", currentMI: "", term: "", firstLoanBalance: "", estimatedPayoff: "", loanType: "", bestRate: "", betterRate: "", goodRate: "", creditDiscountBest: "", creditDiscountBetter: "", creditDiscountGood: "", additionalBest: "", additionalBetter: "", additionalGood: "", appraisedValue: "", purchasePrice: "", baseLoanAmount: "", finalLoanAmount: "", loanTerm: "", monthlyMIFactor: "", monthlyMIPremium: "", ltvFYI: "", pniPayment: "", additionalMonthlyBest: "", additionalMonthlyBetter: "", additionalMonthlyGood: "", cashToCloseBest: "", cashToCloseBetter: "", cashToCloseGood: "", titleInsurance: "", monthlyTaxes: "", reservesTaxes: "", totalTaxes: "", monthlyInsurance: "", reservesInsurance: "", totalInsurance: "", daysRequired: ""})
    }

    const [localLI, setLocalLI] = useState({name: loanInput.name, address: loanInput.address, phone: loanInput.phone, email: loanInput.email, loanPurpose: loanInput.loanPurpose, currentRate: loanInput.currentRate, currentEscrow: loanInput.currentEscrow, rentPayment: loanInput.rentPayment, currentMI: loanInput.currentMI, term: loanInput.term, firstLoanBalance: loanInput.firstLoanBalance, estimatedPayoff: loanInput.estimatedPayoff, loanType: loanInput.loanType, bestRate: loanInput.bestRate, betterRate: loanInput.betterRate, goodRate: loanInput.goodRate, creditDiscountBest: loanInput.creditDiscountBest, creditDiscountBetter: loanInput.creditDiscountBetter, creditDiscountGood: loanInput.creditDiscountGood, additionalBest: loanInput.additionalBest, additionalBetter: loanInput.additionalBetter, additionalGood: loanInput.additionalGood, appraisedValue: loanInput.appraisedValue, purchasePrice: loanInput.purchasePrice, baseLoanAmount: loanInput.baseLoanAmount, finalLoanAmount: loanInput.finalLoanAmount, loanTerm: loanInput.loanTerm, monthlyMIFactor: loanInput.monthlyMIFactor, monthlyMIPremium: loanInput.monthlyMIPremium, ltvFYI: loanInput.ltvFYI, pniPayment: loanInput.pniPayment, additionalMonthlyBest: loanInput.additionalMonthlyBest, additionalMonthlyBetter: loanInput.additionalMonthlyBetter, additionalMonthlyGood: loanInput.additionalMonthlyGood, cashToCloseBest: loanInput.cashToCloseBest, cashToCloseBetter: loanInput.cashToCloseBetter, cashToCloseGood: loanInput.cashToCloseGood, titleInsurance: loanInput.titleInsurance, monthlyTaxes: loanInput.monthlyTaxes, reservesTaxes: loanInput.reservesTaxes, totalTaxes: loanInput.totalTaxes, monthlyInsurance: loanInput.monthlyInsurance, reservesInsurance: loanInput.reservesInsurance, totalInsurance: loanInput.totalInsurance, daysRequired: loanInput.daysRequired})
    const [getLocalLI, setGetLocalLI] = useState([])
    const handleChangeLoanInput = (event) => {
        const {name, value} = event.target
        setLocalLI(prevLoanInput => ({...prevLoanInput, [name]: value}))
    }

    const loanTypeDropDown = getFeeSetupData?.map(data => <option value={data.feeScenario}>{data.feeScenario}</option>)
    const x = getFeeSetupData?.find(data => {
        return data.feeScenario === localLI.loanType 
    })

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

    useEffect(() => {
        getLoanInputs()
    }, [])
    useEffect(() => {
        setLocalLI(loanInput)
    }, [loanInput])

    // const r = (localLI.bestRate / 100) / 12
    // const n = localLI.loanTerm
    // const p = localLI.baseLoanAmount
    // const b = (r * ((1 + r)**n)) / (((1 + r)**n) - 1)
    // const c = Math.round((localLI.baseLoanAmount * ((((localLI.bestRate / 100) / 12) * (1 + ((localLI.bestRate / 100) / 12))**(localLI.loanTerm)) / ((1 + ((localLI.bestRate / 100) / 12))**(localLI.loanTerm) - 1))) * 100) / 100

    return (
        <div style={{display: "grid"}}>
            <h1 style={{display: "flex", justifyContent: "center"}}>Loan Input</h1>
            <h2>Client Info</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmitLoanInput()
            }}>
                <button type="button" style={{backgroundColor: "black", color: "white", margin: "5px", padding: "10px"}} onClick={() => 
                    editLoanInput(loanInput._id, {name: localLI.name, address: localLI.address, phone: localLI.phone, email: localLI.email, loanPurpose: localLI.loanPurpose, currentRate: localLI.currentRate, currentEscrow: localLI.currentEscrow, rentPayment: localLI.rentPayment, currentMI: localLI.currentMI, term: localLI.term, firstLoanBalance: localLI.firstLoanBalance, estimatedPayoff: localLI.estimatedPayoff, loanType: localLI.loanType, bestRate: localLI.bestRate, betterRate: localLI.betterRate, goodRate: localLI.goodRate, creditDiscountBest: localLI.creditDiscountBest, creditDiscountBetter: localLI.creditDiscountBetter, creditDiscountGood: localLI.creditDiscountGood, additionalBest: localLI.additionalBest, additionalBetter: localLI.additionalBetter, additionalGood: localLI.additionalGood, appraisedValue: localLI.appraisedValue, purchasePrice: localLI.purchasePrice, baseLoanAmount: localLI.baseLoanAmount, finalLoanAmount: localLI.finalLoanAmount, loanTerm: localLI.loanTerm, monthlyMIFactor: localLI.monthlyMIFactor, monthlyMIPremium: localLI.monthlyMIPremium, ltvFYI: localLI.ltvFYI, pniPayment: localLI.pniPayment, additionalMonthlyBest: localLI.additionalMonthlyBest, additionalMonthlyBetter: localLI.additionalMonthlyBetter, additionalMonthlyGood: localLI.additionalMonthlyGood, cashToCloseBest: localLI.cashToCloseBest, cashToCloseBetter: localLI.cashToCloseBetter, cashToCloseGood: localLI.cashToCloseGood, titleInsurance: localLI.titleInsurance, monthlyTaxes: localLI.monthlyTaxes, reservesTaxes: localLI.reservesTaxes, totalTaxes: localLI.totalTaxes, monthlyInsurance: localLI.monthlyInsurance, reservesInsurance: localLI.reservesInsurance, totalInsurance: localLI.totalInsurance, daysRequired: localLI.daysRequired})}>
                Update</button>
                <button type="button" style={{backgroundColor: "white", color: "black", margin: "3px", padding: "3px"}} onClick={() => 
                    editLoanInput(loanInput._id, {name: "", address: "", phone: "", email: "", loanPurpose: "", currentRate: "", currentEscrow: "", rentPayment: "", currentMI: "", term: "", firstLoanBalance: "", estimatedPayoff: "", loanType: "", bestRate: "", betterRate: "", goodRate: "", creditDiscountBest: "", creditDiscountBetter: "", creditDiscountGood: "", additionalBest: "", additionalBetter: "", additionalGood: "", appraisedValue: "", purchasePrice: "", baseLoanAmount: "", finalLoanAmount: "", loanTerm: "", monthlyMIFactor: "", monthlyMIPremium: "", ltvFYI: "", pniPayment: "", additionalMonthlyBest: "", additionalMonthlyBetter: "", additionalMonthlyGood: "", cashToCLoseBest: "", cashToCLoseBetter: "", cashToCloseGood: "", titleInsurance: "", monthlyTaxes: "", reservesTaxes: "", totalTaxes: "", monthlyInsurance: "", reservesInsurance: "", totalInsurance: "", daysRequired: ""})}>Clear Inputs</button>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Name <input name="name" value={localLI.name} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Street Address<input name="address" value={localLI.address} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Phone<input name="phone" value={localLI.phone} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Email<input name="email" value={localLI.email} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Loan Purpose
                        <select name="loanPurpose" value={localLI.loanPurpose} onChange={handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}>
                            <option></option>
                            <option value="purchase">Purchase</option>
                            <option value="refinance">Refinance</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <h2>Current Loan / Housing Info (If Applicable)</h2>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Current Rate
                        <input name="currentRate" value={localLI.currentRate} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Current Escrow
                        <input name="currentEscrow" value={localLI.currentEscrow} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Rent/House Pymnt
                        <input name="rentPayment" value={localLI.rentPayment} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Current MI
                        <input name="currentMI" value={localLI.currentMI} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Term
                        <select name="term" style={{margin: "5px", backgroundColor: "white"}} value={localLI.term} onChange={handleChangeLoanInput}>
                            <option></option>
                            <option value="360">360</option>
                            <option value="240">240</option>
                            <option value="180">180</option>
                            <option value="120">120</option>
                        </select>
                    </td>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>1st Loan Balance
                        <input name="firstLoanBalance" value={localLI.firstLoanBalance} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Last Appraised (If Available)
                        
                    </td>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Other Debt to be Paid Off
                        
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Adtnl Principal Pmnts / Mos
                        
                    </td>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Estimated Payoff: {'       '}
                        ${(+pcInput.typicalFees + +(Math.round(((+loanInput.firstLoanBalance * +loanInput.currentRate) / 365) * (pcInput.checked ? (31 - +loanInput.daysRequired) : ((31 - +loanInput.daysRequired) + 30)) * 100) / 100)).toLocaleString("en")}
                    </td>
                </tr>
                <h2>Loan Terms</h2>
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                                {/* <button type="button" onClick={() => testing()}>testing</button> */}
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Loan Type:</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <select name="loanType" value={localLI.loanType} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}>
                                        <option></option>
                                        {loanTypeDropDown}
                                    </select>
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                    {localLI.loanType}
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                    {localLI.loanType}
                                </td>
                            </tr>
                            <tr style={{border: "1px solid black"}}>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                    Quote Title
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>Best Rate / Higher Cost</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>Better Rate / Moderate Cost</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>Good Rate / Low Cost</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                    <h4 style={{backgroundColor: "#c9daf8"}}>Rate</h4> 
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input placeholder="Rate %" name="bestRate" value={localLI.bestRate} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>%
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input placeholder="Rate %" name="betterRate" value={localLI.betterRate} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>%
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input placeholder="Rate %" name="goodRate" value={localLI.goodRate} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>%
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Credit(-) / Discount(+) %</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input name="creditDiscountBest" value={localLI.creditDiscountBest} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input name="creditDiscountBetter" value={localLI.creditDiscountBetter} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input name="creditDiscountGood" value={localLI.creditDiscountGood} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Additional Credit / Discount</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="additionalBest" value={localLI.additionalBest} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="additionalBetter" value={localLI.additionalBetter} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="additionalGood" value={localLI.additionalGood} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Appraised Value</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="appraisedValue" value={localLI.appraisedValue} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.appraisedValue}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.appraisedValue}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Purchase Price</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="purchasePrice" value={localLI.purchasePrice} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.purchasePrice}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.purchasePrice}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Base Loan Amount</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="baseLoanAmount" value={localLI.baseLoanAmount} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.baseLoanAmount}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.baseLoanAmount}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>UFMIP / Funding Fee %</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{localLI.ufmipPercent ? localLI.ufmipPercent : ''}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>UFMIP / Funding Fee $</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>${localLI.baseLoanAmount * localLI.ufmipPercent ? localLI.baseLoanAMount * localLI.ufmipPercent : ''}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Final Loan Amount</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.baseLoanAmount}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.baseLoanAmount}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.baseLoanAmount}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Loan Term</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <select name="loanTerm" value={localLI.loanTerm} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}>
                                        <option></option>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{localLI.loanTerm}
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{localLI.loanTerm}
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Monthly MI Factor</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="monthlyMIFactor" value={localLI.monthlyMIFactor} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{localLI.monthlyMIFactor}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{localLI.monthlyMIFactor}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Monthly MI Premium</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {((localLI.monthlyMIFactor * localLI.baseLoanAmount) / 100) / 12}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {((localLI.monthlyMIFactor * localLI.baseLoanAmount) / 100) / 12}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {((localLI.monthlyMIFactor * localLI.baseLoanAmount) / 100) / 12}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>LTV (FYI)</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{Math.round((+localLI.baseLoanAmount / +localLI.appraisedValue) * 10000) / 100} %</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{Math.round((+localLI.baseLoanAmount / +localLI.appraisedValue) * 10000) / 100} %</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{Math.round((+localLI.baseLoanAmount / +localLI.appraisedValue) * 10000) / 100} %</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>P&I Payment</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round((localLI.baseLoanAmount * ((((localLI.bestRate / 100) / 12) * (1 + ((localLI.bestRate / 100) / 12))**(localLI.loanTerm)) / ((1 + ((localLI.bestRate / 100) / 12))**(localLI.loanTerm) - 1))) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round((localLI.baseLoanAmount * ((((localLI.betterRate / 100) / 12) * (1 + ((localLI.betterRate / 100) / 12))**(localLI.loanTerm)) / ((1 + ((localLI.betterRate / 100) / 12))**(localLI.loanTerm) - 1))) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round((localLI.baseLoanAmount * ((((localLI.goodRate / 100) / 12) * (1 + ((localLI.goodRate / 100) / 12))**(localLI.loanTerm)) / ((1 + ((localLI.goodRate / 100) / 12))**(localLI.loanTerm) - 1))) * 100) / 100}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Adtnl Monthly Pymnts</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyBest" value={localLI.additionalMonthlyBest} onChange={handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyBetter" value={localLI.additionalMonthlyBetter} onChange={handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyGood" value={localLI.additionalMonthlyGood} onChange={handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Cash to Close</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$ {Math.round((+localLI.purchasePrice + +(((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection) + +(+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + +(Math.round(((localLI.monthlyTaxes * localLI.reservesTaxes) + (localLI.monthlyInsurance * localLI.reservesInsurance) + (Math.round((((((+localLI.bestRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100)) * 100) / 100) - +localLI.baseLoanAmount) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$ {Math.round((+localLI.purchasePrice + +(((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection) + +(+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + +(Math.round(((localLI.monthlyTaxes * localLI.reservesTaxes) + (localLI.monthlyInsurance * localLI.reservesInsurance) + (Math.round((((((+localLI.betterRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100)) * 100) / 100) - +localLI.baseLoanAmount) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$ {Math.round((+localLI.purchasePrice + +(((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection) + +(+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + +(Math.round(((localLI.monthlyTaxes * localLI.reservesTaxes) + (localLI.monthlyInsurance * localLI.reservesInsurance) + (Math.round((((((+localLI.goodRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100)) * 100) / 100) - +localLI.baseLoanAmount) * 100) / 100}</td>
                            </tr>
                            <h2>Closing Costs</h2>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white", fontWeight: "bold"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$ {(((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection) + +(+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording)}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$ {(((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection) + +(+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording)}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$ {(((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection) + +(+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording)}</td>
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Lender Costs</h3>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {((x?.origination / 100) * localLI.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal + x?.pestInspection}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Origination</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {(x?.origination / 100) * localLI.baseLoanAmount}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {(x?.origination / 100) * localLI.baseLoanAmount}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {(x?.origination / 100) * localLI.baseLoanAmount}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Lender Credit / Discount</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Underwriting</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.underwriting}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.underwriting}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.underwriting}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Tax Service</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.taxService}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.taxService}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.taxService}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Credit Report</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.creditReport}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.creditReport}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.creditReport}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Flood Certificate</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.flood}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.flood}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.flood}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Appraisal</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.appraisal}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.appraisal}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.appraisal}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Pest Inspection</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.pestInspection}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.pestInspection}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {x?.pestInspection}</td>
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Title Costs</h3>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {+localLI.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Title Insurance</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="titleInsurance" value={localLI.titleInsurance} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.titleInsurance}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.titleInsurance}</td>
                            </tr>
                            {/* <button type="button" onClick={() => testing()}>testing</button> */}
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Closing Fee</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.closingFee}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.closingFee}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.closingFee}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>CPL</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.cpl}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.cpl}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.cpl}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>CPL Borrower</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.cplBorrower}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.cplBorrower}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.cplBorrower}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Endorsements</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.endorsements}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.endorsements}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.endorsements}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Recording Services</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.recordingServices}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.recordingServices}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.recordingServices}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Recording</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.recording}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.recording}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0]?.recording}</td>
                            </tr>
                            <h2>Escrow and Prepaids</h2>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$ {Math.round(((localLI.monthlyTaxes * localLI.reservesTaxes) + (localLI.monthlyInsurance * localLI.reservesInsurance) + (Math.round((((((+localLI.bestRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100)) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$ {Math.round(((localLI.monthlyTaxes * localLI.reservesTaxes) + (localLI.monthlyInsurance * localLI.reservesInsurance) + (Math.round((((((+localLI.betterRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100)) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$ {Math.round(((localLI.monthlyTaxes * localLI.reservesTaxes) + (localLI.monthlyInsurance * localLI.reservesInsurance) + (Math.round((((((+localLI.goodRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100)) * 100) / 100}</td>
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Taxes & Insurance</h3>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Monthly</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Monthly Reserves</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Total</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Taxes</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="monthlyTaxes" value={localLI.monthlyTaxes} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="reservesTaxes" value={localLI.reservesTaxes} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.monthlyTaxes * localLI?.reservesTaxes}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Insurance</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="monthlyInsurance" value={localLI.monthlyInsurance} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="reservesInsurance" value={localLI.reservesInsurance} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.monthlyInsurance * localLI?.reservesInsurance}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {+localLI.monthlyTaxes + +localLI.monthlyInsurance}</td>
                                {/* <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td> */}
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Prepaid Interest</h3>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Daily Amount</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round(((+localLI.bestRate * (+localLI.baseLoanAmount / 100)) / 365) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round(((+localLI.betterRate * (+localLI.baseLoanAmount / 100)) / 365) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round(((+localLI.goodRate * (+localLI.baseLoanAmount / 100)) / 365) * 100) / 100}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Days Required</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="daysRequired" value={localLI.daysRequired} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>{localLI.daysRequired}</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>{localLI.daysRequired}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round(((Math.round(((+localLI.bestRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round(((Math.round(((+localLI.betterRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {Math.round(((Math.round(((+localLI.goodRate * (+localLI.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +localLI.daysRequired) * 100) / 100}</td>
                            </tr>
                    </tbody>
                </table>
                <button type="button" style={{backgroundColor: "black", color: "white", margin: "5px", padding: "10px"}} onClick={() => 
                    editLoanInput(loanInput._id, {name: localLI.name, address: localLI.address, phone: localLI.phone, email: localLI.email, loanPurpose: localLI.loanPurpose, currentRate: localLI.currentRate, currentEscrow: localLI.currentEscrow, rentPayment: localLI.rentPayment, currentMI: localLI.currentMI, term: localLI.term, firstLoanBalance: localLI.firstLoanBalance, loanType: localLI.loanType, bestRate: localLI.bestRate, betterRate: localLI.betterRate, goodRate: localLI.goodRate, creditDiscountBest: localLI.creditDiscountBest, creditDiscountBetter: localLI.creditDiscountBetter, creditDiscountGood: localLI.creditDiscountGood, additionalBest: localLI.additionalBest, additionalBetter: localLI.additionalBetter, additionalGood: localLI.additionalGood, appraisedValue: localLI.appraisedValue, purchasePrice: localLI.purchasePrice, baseLoanAmount: localLI.baseLoanAmount, loanTerm: localLI.loanTerm, monthlyMIFactor: localLI.monthlyMIFactor, additionalMonthlyBest: localLI.additionalMonthlyBest, additionalMonthlyBetter: localLI.additionalMonthlyBetter, additionalMonthlyGood: localLI.additionalMonthlyGood, titleInsurance: localLI.titleInsurance, monthlyTaxes: localLI.monthlyTaxes, reservesTaxes: localLI.reservesTaxes, monthlyInsurance: localLI.monthlyInsurance, reservesInsurance: localLI.reservesInsurance, daysRequired: localLI.daysRequired})}>
                Update</button>
                <button type="button" style={{backgroundColor: "white", color: "black", margin: "3px", padding: "3px"}} onClick={() => 
                    editLoanInput(loanInput._id, {name: "", address: "", phone: "", email: "", loanPurpose: "", currentRate: "", currentEscrow: "", rentPayment: "", currentMI: "", term: "", firstLoanBalance: "", loanType: "", bestRate: "", betterRate: "", goodRate: "", creditDiscountBest: "", creditDiscountBetter: "", creditDiscountGood: "", additionalBest: "", additionalBetter: "", additionalGood: "", appraisedValue: "", purchasePrice: "", baseLoanAmount: "", loanTerm: "", monthlyMIFactor: "", additionalMonthlyBest: "", additionalMonthlyBetter: "", additionalMonthlyGood: "", titleInsurance: "", monthlyTaxes: "", reservesTaxes: "", monthlyInsurance: "", reservesInsurance: "", daysRequired: ""})}>Clear Inputs</button>
                <div style={{display: "flex"}}>
                    <button type="submit" style={{backgroundColor: "#c9daf8", margin: "1px", padding: "1px"}}>Submit Inputs</button>
                    <p>(Submit is only for initial inputs)</p>
                </div>
            </form>
        </div>
    )
}

export default LoanInput