import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"

function LoanInput() {

    const context = useContext(MortgageContext)

    const {editLoanInput, getLoanInputs, loanInput, getFeeSetupData, userAxios, setGetFeeSetupData, getTitleFeesData, setGetTitleFeesData, setGetLoanInput, handleSubmitLoanInput} = useContext(MortgageContext)

    const testing = () => {

        console.log(
            "getFeeSetupData",
            // getFeeSetupData,
            // localLI,
            x
        )
    }
    const [localLI, setLocalLI] = useState({name: loanInput.name, address: loanInput.address, phone: loanInput.phone, email: loanInput.email, loanPurpose: loanInput.loanPurpose, currentRate: loanInput.currentRate, currentEscrow: loanInput.currentEscrow, rentPayment: loanInput.rentPayment, currentMI: loanInput.currentMI, term: loanInput.term, firstLoanBalance: loanInput.firstLoanBalance, loanType: loanInput.loanType, bestRate: loanInput.bestRate, betterRate: loanInput.betterRate, goodRate: loanInput.goodRate, creditDiscountBest: loanInput.creditDiscountBest, creditDiscountBetter: loanInput.creditDiscountBetter, creditDiscountGood: loanInput.creditDiscountGood, additionalBest: loanInput.additionalBest, additionalBetter: loanInput.additionalBetter, additionalGood: loanInput.additionalGood, appraisedValue: loanInput.appraisedValue, purchasePrice: loanInput.purchasePrice, baseLoanAmount: loanInput.baseLoanAmount, loanTerm: loanInput.loanTerm, monthlyMIFactor: loanInput.monthlyMIFactor, additionalMonthlyBest: loanInput.additionalMonthlyBest, additionalMonthlyBetter: loanInput.additionalMonthlyBetter, additionalMonthlyGood: loanInput.additionalMonthlyGood, titleInsurance: loanInput.titleInsurance, monthlyTaxes: loanInput.monthlyTaxes, reservesTaxes: loanInput.reservesTaxes, monthlyInsurance: loanInput.monthlyInsurance, reservesInsurance: loanInput.reservesInsurance, daysRequired: loanInput.daysRequired})
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



    return (
        <div style={{display: "grid"}}>
            <h1 style={{display: "flex", justifyContent: "center"}}>Loan Input</h1>
            <h2>Client Info</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmitLoanInput()
            }}>
                <button type="button" style={{backgroundColor: "black", color: "white", margin: "5px", padding: "10px"}} onClick={() => 
                    editLoanInput(loanInput._id, {name: localLI.name, address: localLI.address, phone: localLI.phone, email: localLI.email, loanPurpose: localLI.loanPurpose, currentRate: localLI.currentRate, currentEscrow: localLI.currentEscrow, rentPayment: localLI.rentPayment, currentMI: localLI.currentMI, term: localLI.term, firstLoanBalance: localLI.firstLoanBalance, loanType: localLI.loanType, bestRate: localLI.bestRate, betterRate: localLI.betterRate, goodRate: localLI.goodRate, creditDiscountBest: localLI.creditDiscountBest, creditDiscountBetter: localLI.creditDiscountBetter, creditDiscountGood: localLI.creditDiscountGood, additionalBest: localLI.additionalBest, additionalBetter: localLI.additionalBetter, additionalGood: localLI.additionalGood, appraisedValue: localLI.appraisedValue, purchasePrice: localLI.purchasePrice, baseLoanAmount: localLI.baseLoanAmount, loanTerm: localLI.loanTerm, monthlyMIFactor: localLI.monthlyMIFactor, additionalMonthlyBest: localLI.additionalMonthlyBest, additionalMonthlyBetter: localLI.additionalMonthlyBetter, additionalMonthlyGood: localLI.additionalMonthlyGood, titleInsurance: localLI.titleInsurance, monthlyTaxes: localLI.monthlyTaxes, reservesTaxes: localLI.reservesTaxes, monthlyInsurance: localLI.monthlyInsurance, reservesInsurance: localLI.reservesInsurance, daysRequired: localLI.daysRequired})}>
                Update</button>
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
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Estimated Payoff
                        
                    </td>
                </tr>
                <h2>Loan Terms</h2>
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                                <button type="button" onClick={() => testing()}>testing</button>
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
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Purchase Price</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="purchasePrice" value={localLI.purchasePrice} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Base Loan Amount</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="baseLoanAmount" value={localLI.baseLoanAmount} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>UFMIP / Funding Fee %</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>UFMIP / Funding Fee $</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Final Loan Amount</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
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
                                    {/* <select>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select> */}
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{localLI.loanTerm}
                                    {/* <select>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select> */}
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
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>LTV (FYI)</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>%</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>%</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>%</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>P&I Payment</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Adtnl Monthly Pymnts</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyBest" value={localLI.additionalMonthlyBest} onChange={handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyBetter" value={localLI.additionalMonthlyBetter} onChange={handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyGood" value={localLI.additionalMonthlyGood} onChange={handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Cash to Close</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$</td>
                            </tr>
                            <h2>Closing Costs</h2>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white", fontWeight: "bold"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$</td>
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Lender Costs</h3>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Origination</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{x?.origination} %</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{x?.origination} %</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{x?.origination} %</td>
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
                            <button type="button" onClick={() => testing()}>testing</button>
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
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#334960", color: "white"}}>$</td>
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
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.monthlyTaxes.toLocaleString() * localLI.reservesTaxes.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Insurance</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="monthlyInsurance" value={localLI.monthlyInsurance} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="reservesInsurance" value={localLI.reservesInsurance} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {localLI.monthlyInsurance.toLocaleString() * localLI.reservesInsurance.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {+localLI.monthlyTaxes.toLocaleString() + +localLI.monthlyInsurance.toLocaleString()}</td>
                                {/* <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td> */}
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Prepaid Interest</h3>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Daily Amount</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Days Required</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="daysRequired" value={localLI.daysRequired} onChange={handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>{localLI.daysRequired}</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>{localLI.daysRequired}</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                    </tbody>
                </table>
                <button type="button" style={{backgroundColor: "black", color: "white", margin: "5px", padding: "10px"}} onClick={() => 
                    editLoanInput(loanInput._id, {name: localLI.name, address: localLI.address, phone: localLI.phone, email: localLI.email, loanPurpose: localLI.loanPurpose, currentRate: localLI.currentRate, currentEscrow: localLI.currentEscrow, rentPayment: localLI.rentPayment, currentMI: localLI.currentMI, term: localLI.term, firstLoanBalance: localLI.firstLoanBalance, loanType: localLI.loanType, bestRate: localLI.bestRate, betterRate: localLI.betterRate, goodRate: localLI.goodRate, creditDiscountBest: localLI.creditDiscountBest, creditDiscountBetter: localLI.creditDiscountBetter, creditDiscountGood: localLI.creditDiscountGood, additionalBest: localLI.additionalBest, additionalBetter: localLI.additionalBetter, additionalGood: localLI.additionalGood, appraisedValue: localLI.appraisedValue, purchasePrice: localLI.purchasePrice, baseLoanAmount: localLI.baseLoanAmount, loanTerm: localLI.loanTerm, monthlyMIFactor: localLI.monthlyMIFactor, additionalMonthlyBest: localLI.additionalMonthlyBest, additionalMonthlyBetter: localLI.additionalMonthlyBetter, additionalMonthlyGood: localLI.additionalMonthlyGood, titleInsurance: localLI.titleInsurance, monthlyTaxes: localLI.monthlyTaxes, reservesTaxes: localLI.reservesTaxes, monthlyInsurance: localLI.monthlyInsurance, reservesInsurance: localLI.reservesInsurance, daysRequired: localLI.daysRequired})}>
                Update</button>
                <div style={{display: "flex"}}>
                    <button type="submit" style={{backgroundColor: "#c9daf8", margin: "5px", padding: "5px"}}>Submit Inputs</button>
                    <p>(Submit is only for initial inputs)</p>
                </div>
            </form>
        </div>
    )
}

export default LoanInput