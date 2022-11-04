import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"

function LoanInput() {

    const context = useContext(MortgageContext)

    const {getFeeSetupData, userAxios, setGetFeeSetupData, getTitleFeesData, setGetTitleFeesData} = useContext(MortgageContext)

    const testing = () => {
        console.log(
            "testing",
            getTitleFeesData
        )
    }
    useEffect(() => {
        userAxios.get("/api/feesetup")
            .then(res => {
                console.log("feesetup response", res.data)
                setGetFeeSetupData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        userAxios.get("/api/titlefees")
            .then(res => {
                console.log("titlefees", res.data)
                setGetTitleFeesData(res.data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div style={{display: "grid"}}>
            <h1 style={{display: "flex", justifyContent: "center"}}>Loan Input</h1>
            <h2>Client Info</h2>
            <form >
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Name <input name="name" value={context.name} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Street Address<input name="address" value={context.address} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Phone<input name="phone" value={context.phone} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Email<input name="email" value={context.email} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                        Loan Purpose
                        <select name="loanPurpose" value={context.loanPurpose} onChange={context.handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}>
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
                        <input name="currentRate" value={context.currentRate} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Current Escrow
                        <input name="currentEscrow" value={context.currentEscrow} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Rent/House Pymnt
                        <input name="rentPayment" value={context.rentPayment} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Current MI
                        <input name="currentMI" value={context.currentMI} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Term
                        <select name="term" style={{margin: "5px", backgroundColor: "white"}} value={context.term} onChange={context.handleChangeLoanInput}>
                            <option></option>
                            <option value="360">360</option>
                            <option value="240">240</option>
                            <option value="180">180</option>
                            <option value="120">120</option>
                        </select>
                    </td>
                    <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>1st Loan Balance
                        <input name="firstLoanBalance" value={context.firstLoanBalance} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>
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
                {/* <div style={{display: "flex"}}>
                    <h4>Loan Type</h4>
                    <select style={{margin: "5px"}}>
                        <option value="conventional">Conventional</option>
                        <option value="fha">FHA</option>
                        <option value="va">VA</option>
                        <option value="usda">USDA</option>
                    </select>
                    <select style={{margin: "5px"}}>
                        <option value="conventional">Conventional</option>
                        <option value="fha">FHA</option>
                        <option value="va">VA</option>
                        <option value="usda">USDA</option>
                    </select>
                    <select style={{margin: "5px"}}>
                        <option value="conventional">Conventional</option>
                        <option value="fha">FHA</option>
                        <option value="va">VA</option>
                        <option value="usda">USDA</option>
                    </select>
                </div>
                <br />
                <div style={{display: "flex"}}>
                    <h4>Quote Title</h4>
                    <p style={{margin: "12px"}}>Best Rate / <br />
                        Higher Cost</p>
                    <p style={{margin: "12px"}}>Better Rate / <br />
                        Moderate Cost</p>
                    <p style={{margin: "12px"}}>Good Rate / <br />
                        Low Cost</p>
                </div>
                <br /> */}
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Loan Type:</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <select name="loanType" value={context.loanType} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}>
                                        <option></option>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                    {/* <select>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select> */}
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                    {/* <select>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select> */}
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
                                    <input placeholder="Rate %" name="bestRate" value={context.bestRate} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>%
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input placeholder="Rate %" name="betterRate" value={context.betterRate} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>%
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input placeholder="Rate %" name="goodRate" value={context.goodRate} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>%
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Credit(-) / Discount(+) %</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input name="creditDiscountBest" value={context.creditDiscountBest} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input name="creditDiscountBetter" value={context.creditDiscountBetter} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>
                                    <input name="creditDiscountGood" value={context.creditDiscountGood} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/>
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Additional Credit / Discount</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="additionalBest" value={context.additionalBest} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="additionalBetter" value={context.additionalBetter} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="additionalGood" value={context.additionalGood} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Appraised Value</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="appraisedValue" value={context.appraisedValue} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Purchase Price</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="purchasePrice" value={context.purchasePrice} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Base Loan Amount</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="baseLoanAmount" value={context.baseLoanAmount} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
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
                                    <select name="loanTerm" value={context.loanTerm} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}>
                                        <option></option>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                    {/* <select>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select> */}
                                </td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
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
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="monthlyMIFactor" value={context.monthlyMIFactor} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
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
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyBest" value={context.additionalMonthlyBest} onChange={context.handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyBetter" value={context.additionalMonthlyBetter} onChange={context.handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}><input name="additionalMonthlyGood" value={context.additionalMonthlyGood} onChange={context.handleChangeLoanInput} style={{backgroundColor: "#c9daf8"}}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Cash to Close</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$</td>
                            </tr>
                            <h2>Closing Costs</h2>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
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
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Lender Credit / Discount</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Underwriting</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Tax Service</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Credit Report</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Flood Certificate</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Appraisal</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Title Costs</h3>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Title Insurance</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="titleInsurance" value={context.titleInsurance} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <button type="button" onClick={() => testing()}>testing</button>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Closing Fee</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0].closingFee}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>CPL</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0].cpl}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>CPL Borrower</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0].cplBorrower}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Endorsements</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0].endorsements}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Recording Services</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0].recordingServices}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Recording</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {getTitleFeesData[0].recording}</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
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
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="monthlyTaxes" value={context.monthlyTaxes} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="reservesTaxes" value={context.reservesTaxes} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Insurance</td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}>$<input name="monthlyInsurance" value={context.monthlyInsurance} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="reservesInsurance" value={context.reservesInsurance} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
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
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="daysRequired" value={context.daysRequired} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="daysRequired" value={context.daysRequired} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                                <td style={{border: "1px solid black", backgroundColor: "white"}}><input name="daysRequired" value={context.daysRequired} onChange={context.handleChangeLoanInput} style={{backgroundColor: "white"}}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Total</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                                <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                            </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default LoanInput