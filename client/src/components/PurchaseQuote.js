import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import "./PurchaseQuote.css"
import beamLogo from "./beamlogo.png"
import contactInfo from "./contactinfo.png"
import customQuotes from "./custom quotes.png"
import pfp from "./pfp.png"
import LoanInput from "./LoanInput"

function PurchaseQuote() {

    const context = useContext(MortgageContext)
    const {loanInput, getLoanInputs} = useContext(MortgageContext)

    // {loadInput.extra ? loanInput?.extra || "&nbsp;"}
    // linkedin endorsement, pass on my info to clients, stress it was a client project in resume
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
    
    useEffect(() => {
        getLoanInputs()
    }, [])

    function testing() {
        console.log(loanInput.term)
    }

    return (
        <div>
            <button onClick={testing}>testing</button>
            <h1>Purchase Quote</h1>
            <div class="pparent">
                {/* <div class="pone"> */}
                    <div class="poneOne">
                        <img style={{height: 140, width: 270, backgroundColor: "#334960"}} src={beamLogo}/>
                    </div>
                    <div class="poneTwo"> 
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", alignItems: "flex-end", fontSize: "29px", fontFamily: "sans-serif"}}>Custom Quote <br /> Analysis For:</div>
                        <div style={{backgroundColor: "#334960", fontSize: "14px", alignItems: "bottom"}}>This is not a loan estimate*</div>
                    </div>
                    <div class="poneThree">
                        <div style={{backgroundColor: "#334960", fontSize: "26px"}}>{loanInput.name}</div>
                        <div style={{backgroundColor: "#334960"}}>Date: {date}</div>
                    </div>
                    <div class="poneFour">
                            <div style={{backgroundColor: "#334960"}}>Prepared by <br /></div>
                            <div style={{backgroundColor: "#334960", fontSize: "30px"}}>Chris Buckway <br /></div>
                            <div style={{backgroundColor: "#334960"}}>Mortgage Loan Officer <br /></div>
                            <div style={{backgroundColor: "#334960", fontSize: "15px"}}>chrisbuckway@beamlending.com </div>
                            <div style={{backgroundColor: "#334960"}}>(801) 786-9837</div>
                    </div>
                    <div class="poneFive">
                        <img style={{height: 130, width: 160, backgroundColor: "#334960"}} src={pfp}/>
                        <br />
                        <div style={{backgroundColor: "#334960", display: "flex", fontSize: "14px"}}>NMLS# 1097309</div>
                    </div>
                {/* </div> */}
                <div class="poneYellow">
                    Comparing Your Current Loan With Our Loan Offers
                </div>
                <div class="ptwo">
                    <div class="ptwoOne">
                        <div>&nbsp;</div>
                        <div>Purchase Price</div>
                        <div>Down Payment</div>
                        <div>Loan Amount</div>
                        <div>Loan Term</div>
                    </div>
                    <div class="ptwoTwo">
                        <div style={{fontSize: "17px", fontWeight: "bold"}}>Current Housing Expense</div>
                        <div style={{fontWeight: "bold"}}>N/A</div>
                        <div style={{fontWeight: "bold"}}>N/A</div>
                        <div>{loanInput.firstLoanBalance === null ? "Unknown" : loanInput.firstLoanBalance.toLocaleString("en")}</div>
                        <div>{loanInput.term === null ? "Unknown" : loanInput.term / 12}</div>
                    </div>
                    <div class="ptwoThree">
                        <div style={{fontSize: "17px"}}>Best Rate / Higher Cost</div>
                        <div>${loanInput.purchasePrice.toLocaleString("en")}</div>
                        <div>${(+loanInput.purchasePrice - +loanInput.baseLoanAmount).toLocaleString("en")}</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>{loanInput.loanTerm / 12}</div>
                    </div>
                    <div class="ptwoFour">
                        <div style={{fontSize: "17px"}}>Better Rate / Moderate Cost</div>
                        <div>${loanInput.purchasePrice.toLocaleString("en")}</div>
                        <div>${(+loanInput.purchasePrice - +loanInput.baseLoanAmount).toLocaleString("en")}</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>{loanInput.loanTerm / 12}</div>
                    </div>
                    <div class="ptwoFive">
                        <div style={{fontSize: "17px"}}>Good Rate / Low Cost</div>
                        <div>${loanInput.purchasePrice.toLocaleString("en")}</div>
                        <div>${(+loanInput.purchasePrice - +loanInput.baseLoanAmount).toLocaleString("en")}</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>{loanInput.loanTerm / 12}</div>
                    </div>
                </div> 
                <div class="ptwoVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Loan Terms</div>
                <div class="ptwoHorizontal">
                    <div style={{justifyContent: "flex-end"}}>Interest Rate</div>
                    <div>&nbsp;</div>
                    <div>{loanInput.bestRate}%</div>
                    <div>{loanInput.betterRate}%</div>
                    <div>{loanInput.goodRate}%</div>
                </div>
                <div class="pthree">
                    <div class="pthreeOne">
                        <div>Principal & Interest</div>
                        <div>Mortgage Insurance</div>
                        <div>Add Taxes & Insurance</div>
                        <div>Extra Principal Payment</div>
                    </div>
                    <div class="pthreeTwo">
                        <div>Unknown</div>
                        <div>Unknown</div>
                        <div>Unknown</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="pthreeThree">
                        <div>$2,007.13</div>
                        <div>$0.00</div>
                        <div>$450.00</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="pthreeFour">
                        <div>$2,036.87</div>
                        <div>$0.00</div>
                        <div>$450.00</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="pthreeFive">
                        <div>$2,066.84</div>
                        <div>$0.00</div>
                        <div>$450.00</div>
                        <div>&nbsp;</div>
                    </div>
                </div>
                <div class="pthreeVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Payment Breakdown</div>

                <div class="pthreeHorizontal1"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>House Payment</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>Difference</div></div></div>
                <div class="pthreeHorizontal2"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$0.00</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>N/A</div></div> </div>
                <div class="pthreeHorizontal3"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,457.13</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>N/A</div></div></div>
                <div class="pthreeHorizontal4"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,486.87</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>N/A</div></div></div>
                <div class="pthreeHorizontal5"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,516.84</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>N/A</div></div></div>

                <div class="pfourOne" style={{display: "grid", gridColumn: "2 / 4"}}>
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
                <div class="pfour">
                    <div class="pfourThree">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div>$2,010.00</div>
                        <div>$0.00</div>
                        <div>$995.00</div>
                        <div>$80.00</div>
                        <div>$48.00</div>
                        <div>$8.00</div>
                        <div>$635.00</div>
                        <br />
                        <div style={{fontWeight: "bold", fontSize: "16px"}}>$1,900.00</div>
                        <div style={{marginBottom: 3}}>$0.00</div>
                    </div>
                    <div class="pfourFour">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div>$2,010.00</div>
                        <div>$0.00</div>
                        <div>$995.00</div>
                        <div>$80.00</div>
                        <div>$48.00</div>
                        <div>$8.00</div>
                        <div>$635.00</div>
                        <br />
                        <div style={{fontWeight: "bold", fontSize: "16px"}}>$1,900.00</div>
                        <div style={{marginBottom: 3}}>$0.00</div>
                    </div>
                    <div class="pfourFive">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div>$2,010.00</div>
                        <div>$0.00</div>
                        <div>$995.00</div>
                        <div>$80.00</div>
                        <div>$48.00</div>
                        <div>$8.00</div>
                        <div>$635.00</div>
                        <br />
                        <div style={{fontWeight: "bold", fontSize: "16px"}}>$1,900.00</div>
                        <div style={{marginBottom: 3}}>$0.00</div>
                    </div>
                </div>
                <div class="pfourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Closing Cost Breakdown</div>
                <div class="pfourHorizontal" style={{gridColumn: "2 / 4"}}>Total Closing Costs</div>
                <div class="pfourHorizontal" style={{gridColumn: "4 / 5"}}>$5,676.00</div>
                <div class="pfourHorizontal" style={{gridColumn: "5 / 6"}}>$5,676.00</div>
                <div class="pfourHorizontal" style={{gridColumn: "6 / 7"}}>$5,676.00</div>
                
                <div class="pfiveOne" style={{display: "grid", gridColumn: "2 / 4"}}>
                    <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>Total Closing Costs</div>
                    <div style={{fontSize: "16px", fontWeight: "bold"}}>Plus Down Payment</div>
                    <div style={{fontSize: "16px", fontWeight: "bold"}}>Plus Money for YOUR New Escrow Account & Prepaids</div>
                    <div>Taxes</div>
                    <div>Insurance</div>
                    <div>Prepaid Interest</div>
                </div>
                <div class="pfive">
                    {/* <div class="pfiveTwo"></div> */}
                    <div class="pfiveThree">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>$5,676.00</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>$158,000.00</div>
                        <div>$750.00</div>
                        <div>$1,050.00</div>
                        <div>$722.77.00</div>   
                    </div> 
                    <div class="pfiveFour">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>$5,676.00</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>$158,000.00</div>
                        <div>$750.00</div>
                        <div>$1,050.00</div>
                        <div>$743.42.00</div>
                    </div>
                    <div class="pfiveFive">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>$5,676.00</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>$158,000.00</div>
                        <div>$750.00</div>
                        <div>$1,050.00</div>
                        <div>$764.08.00</div>
                    </div>
                </div>
                <div class="pfiveVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Cash Needed to Close</div>
                <div class="pfiveHorizontal" style={{gridColumn: "2 / 4"}}>Total Cash to Close / Cash Back</div>
                <div class="pfiveHorizontal" style={{gridColumn: "4 / 5"}}>$166,198.77</div>
                <div class="pfiveHorizontal" style={{gridColumn: "5 / 6"}}>$166,219.42</div>
                <div class="pfiveHorizontal" style={{gridColumn: "6 / 7"}}>$166,240.08</div>

                <div class="psixOne">
                    <p style={{backgroundColor: "white", fontSize: "15px", marginLeft: 5}}>Your actual rate, payment, and costs could be higher.  Get an official Loan Estimate before choosing a loan.</p>
                    <p style={{backgroundColor: "white", fontSize: "12px", marginLeft: 5}}>*The Information provided herein reflects estimates of the charges which you would likely incur should you be approved for a loan. This is not a Loan Estimate required by Federal Law. If you make an application, your Loan Estimate will be sent to you in the opening package. This is not a commitment to lend, nor is it a rate lock, prequalification or pre-approval. This estimate is intended to assist you in evaluating a loan or home purchase using estimated closing and property costs. Closing and settlement cost, reserve deposits, Interest rate and APR are subject to change and the estimates shown above may be more or less depending on factors such as down payment, property type, appraisal and occupancy. Housing costs will vary depending on location, homeowner’s association dues, local and state fees, taxes, and hazard and mortgage insurance. You may wish to compare these estimated charges in considering the total cost of your mortgage.</p>
                </div>
                <div class="psixTwo">
                    <p style={{backgroundColor: "white", fontSize: "16px"}}>Notes:</p>
                </div>

                {/* <div class="seven"></div> */}
            </div>
        </div>
    )
}

export default PurchaseQuote