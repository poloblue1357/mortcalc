import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"

function LoanInput() {

    const context = useContext(MortgageContext)

    return (
        <div style={{display: "grid"}}>
            <h1 style={{display: "flex", justifyContent: "center"}}>Loan Input</h1>
            <h2>Client Info</h2>
            <form >
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>
                        Name <input name="name" value={context.name} onChange={context.handleChangeLoanInput}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>
                        Street Address<input name="address" value={context.address} onChange={context.handleChangeLoanInput}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>
                        Phone<input name="phone" value={context.phone} onChange={context.handleChangeLoanInput}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>
                        Email<input name="email" value={context.email} onChange={context.handleChangeLoanInput}/></td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>
                        Loan Purpose
                        <select name="loanPurpose" value={context.loanPurpose} onChange={context.handleChangeLoanInput}>
                            <option value="purchase">Purchase</option>
                            <option value="refinance">Refinance</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <h2>Current Loan / Housing Info (If Applicable)</h2>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>Current Rate
                        <input name="currentRate" value={context.currentRate} onChange={context.handleChangeLoanInput}/>
                    </td>
                    <td style={{border: "1px solid black"}}>Current Escrow
                        <input name="currentEscrow" value={context.currentEscrow} onChange={context.handleChangeLoanInput}/>
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>Rent/House Pymnt
                        <input name="rentPayment" value={context.rentPayment} onChange={context.handleChangeLoanInput}/>
                    </td>
                    <td style={{border: "1px solid black"}}>Current MI
                        <input name="currentMI" value={context.currentMI} onChange={context.handleChangeLoanInput}/>
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>Term
                        <select name="term" style={{margin: "5px"}} value={context.term} onChange={context.handleChangeLoanInput}>
                            <option value="360">360</option>
                            <option value="240">240</option>
                            <option value="180">180</option>
                            <option value="120">120</option>
                        </select>
                    </td>
                    <td style={{border: "1px solid black"}}>1st Loan Balance
                        <input name="firstLoanBalance" value={context.firstLoanBalance} onChange={context.handleChangeLoanInput}/>
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>Last Appraised (If Available)
                        
                    </td>
                    <td style={{border: "1px solid black"}}>Other Debt to be Paid Off
                        
                    </td>
                </tr>
                <tr style={{textAlign: "right"}}>
                    <td style={{border: "1px solid black"}}>Adtnl Principal Pmnts / Mos
                        
                    </td>
                    <td style={{border: "1px solid black"}}>Estimated Payoff
                        
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
                                <td style={{border: "1px solid black"}}>Loan Type:</td>
                                <td style={{border: "1px solid black"}}>
                                    <select name="loanType" value={context.loanType} onChange={context.handleChangeLoanInput}>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    {/* <select>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select> */}
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    {/* <select>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select> */}
                                </td>
                            </tr>
                            <tr style={{border: "1px solid black"}}>
                                <td style={{border: "1px solid black"}}>
                                    Quote Title
                                </td>
                                <td style={{border: "1px solid black"}}>Best Rate / Higher Cost</td>
                                <td style={{border: "1px solid black"}}>Better Rate / Moderate Cost</td>
                                <td style={{border: "1px solid black"}}>Good Rate / Low Cost</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>
                                    <h4>Rate</h4> 
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input placeholder="Rate %" name="bestRate" value={context.bestRate} onChange={context.handleChangeLoanInput}/>%
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input placeholder="Rate %" name="betterRate" value={context.betterRate} onChange={context.handleChangeLoanInput}/>%
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input placeholder="Rate %" name="goodRate" value={context.goodRate} onChange={context.handleChangeLoanInput}/>%
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Credit(-) / Discount(+) %</td>
                                <td style={{border: "1px solid black"}}>
                                    <input name="creditDiscountBest" value={context.creditDiscountBest} onChange={context.handleChangeLoanInput}/>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input name="creditDiscountBetter" value={context.creditDiscountBetter} onChange={context.handleChangeLoanInput}/>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input name="creditDiscountGood" value={context.creditDiscountGood} onChange={context.handleChangeLoanInput}/>
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Additional Credit / Discount</td>
                                <td style={{border: "1px solid black"}}><input name="additionalBest" value={context.additionalBest} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}><input name="additionalBetter" value={context.additionalBetter} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}><input name="additionalGood" value={context.additionalGood} onChange={context.handleChangeLoanInput}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Appraised Value</td>
                                <td style={{border: "1px solid black"}}>$<input name="appraisedValue" value={context.appraisedValue} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Purchase Price</td>
                                <td style={{border: "1px solid black"}}>$<input name="purchasePrice" value={context.purchasePrice} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Base Loan Amount</td>
                                <td style={{border: "1px solid black"}}>$<input name="baseLoanAmount" value={context.baseLoanAmount} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>UFMIP / Funding Fee %</td>
                                <td style={{border: "1px solid black"}}></td>
                                <td style={{border: "1px solid black"}}></td>
                                <td style={{border: "1px solid black"}}></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>UFMIP / Funding Fee $</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Final Loan Amount</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Loan Term</td>
                                <td style={{border: "1px solid black"}}>
                                    <select name="loanTerm" value={context.loanTerm} onChange={context.handleChangeLoanInput}>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    {/* <select>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select> */}
                                </td>
                                <td style={{border: "1px solid black"}}>
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
                                <td style={{border: "1px solid black"}}>Monthly MI Factor</td>
                                <td style={{border: "1px solid black"}}><input name="monthlyMIFactor" value={context.monthlyMIFactor} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}></td>
                                <td style={{border: "1px solid black"}}></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Monthly MI Premium</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>LTV (FYI)</td>
                                <td style={{border: "1px solid black"}}>%</td>
                                <td style={{border: "1px solid black"}}>%</td>
                                <td style={{border: "1px solid black"}}>%</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>P&I Payment</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Adtnl Monthly Pymnts</td>
                                <td style={{border: "1px solid black"}}><input name="additionalMonthlyBest" value={context.additionalMonthlyBest} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}><input name="additionalMonthlyBetter" value={context.additionalMonthlyBetter} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}><input name="additionalMonthlyGood" value={context.additionalMonthlyGood} onChange={context.handleChangeLoanInput}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Cash to Close</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <h2>Closing Costs</h2>
                            <tr>
                                <td style={{border: "1px solid black"}}>Total</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Lender Costs</h3>
                            <tr>
                                <td style={{border: "1px solid black"}}>Total</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Origination</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Lender Credit / Discount</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Underwriting</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Tax Service</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Credit Report</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Flood Certificate</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Appraisal</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <h3>Title Costs</h3>
                            <tr>
                                <td style={{border: "1px solid black"}}>Total</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Title Insurance</td>
                                <td style={{border: "1px solid black"}}>$<input name="titleInsurance" value={context.titleInsurance} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Closing Fee</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>CPL</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>CPL Borrower</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Endorsements</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Recording Services</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}></td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <h2>Escrow and Prepaids</h2>
                            <tr>
                                <td style={{border: "1px solid black"}}>Total</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Taxes & Insurance</h3>
                            <tr>
                                <td style={{border: "1px solid black"}}></td>
                                <td style={{border: "1px solid black"}}>Monthly</td>
                                <td style={{border: "1px solid black"}}>Monthly Reserves</td>
                                <td style={{border: "1px solid black"}}>Total</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Taxes</td>
                                <td style={{border: "1px solid black"}}>$<input name="monthlyTaxes" value={context.monthlyTaxes} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}><input name="reservesTaxes" value={context.reservesTaxes} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Insurance</td>
                                <td style={{border: "1px solid black"}}>$<input name="monthlyInsurance" value={context.monthlyInsurance} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}><input name="reservesInsurance" value={context.reservesInsurance} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Total</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                {/* <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td> */}
                            </tr>
                            <h3 style={{display: "flex", justifyContent: "center"}}>Prepaid Interest</h3>
                            <tr>
                                <td style={{border: "1px solid black"}}>Daily Amount</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Days Required</td>
                                <td style={{border: "1px solid black"}}><input name="daysRequired" value={context.daysRequired} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}><input name="daysRequired" value={context.daysRequired} onChange={context.handleChangeLoanInput}/></td>
                                <td style={{border: "1px solid black"}}><input name="daysRequired" value={context.daysRequired} onChange={context.handleChangeLoanInput}/></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Total</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                                <td style={{border: "1px solid black"}}>$</td>
                            </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default LoanInput