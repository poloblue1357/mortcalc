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
    const {loanInput, getLoanInputs, getTitleFeesData, userAxios, setGetFeeSetupData, setGetTitleFeesData, getFeeSetupData} = useContext(MortgageContext)

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

    return (
        <div>
            {/* <button onClick={testing}>testing</button> */}
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
                        <div>{loanInput.firstLoanBalance === null ? "Unknown" : `${loanInput.firstLoanBalance.toLocaleString("en")}`}</div>
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
                        <div>{loanInput.rentPayment ? `${loanInput.rentPayment}` : "Unknown"}</div>
                        <div>{loanInput.currentMI ? `${loanInput.currentMI}` : "Unknown"}</div>
                        <div>{loanInput.currentEscrow ? `${loanInput.currentEscrow}` : "Unknown"}</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="pthreeThree">
                        <div>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</div>
                        <div>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString()}</div>
                        <div>${+loanInput.monthlyTaxes + +loanInput.monthlyInsurance}</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="pthreeFour">
                        <div>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</div>
                        <div>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString()}</div>
                        <div>${+loanInput.monthlyTaxes + +loanInput.monthlyInsurance}</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="pthreeFive">
                        <div>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</div>
                        <div>${(((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12).toLocaleString()}</div>
                        <div>${+loanInput.monthlyTaxes + +loanInput.monthlyInsurance}</div>
                        <div>&nbsp;</div>
                    </div>
                </div>
                <div class="pthreeVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Payment Breakdown</div>

                <div class="pthreeHorizontal1"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>House Payment</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>Difference</div></div></div>
                <div class="pthreeHorizontal2"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$0.00</div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>N/A</div></div> </div>
                <div class="pthreeHorizontal3"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$
                    {((Math.round((loanInput.baseLoanAmount * ((((loanInput.bestRate / 100) / 12) * (1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.bestRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)).toLocaleString()}
                    </div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>N/A</div></div></div>
                <div class="pthreeHorizontal4"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$
                    {((Math.round((loanInput.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)).toLocaleString()}
                    </div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>N/A</div></div></div>
                <div class="pthreeHorizontal5"><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$
                    {((Math.round((loanInput.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100) + (((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12) + (+loanInput.monthlyTaxes + +loanInput.monthlyInsurance)).toLocaleString()}
                    </div> <div style={{fontSize: "12px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>N/A</div></div></div>

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
                    <div class="pfourFour">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${(((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal).toLocaleString()}</div>
                        <div>${((x?.origination / 100) * loanInput.baseLoanAmount).toLocaleString()}</div>
                        <div>${((loanInput.creditDiscountBetter * loanInput.baseLoanAmount) / 100) + loanInput.additionalBetter}</div>
                        <div>${x?.underwriting}</div>
                        <div>${x?.taxService}</div>
                        <div>${x?.creditReport}</div>
                        <div>${x?.flood}</div>
                        <div>${x?.appraisal}</div>
                        <br />
                        <div style={{fontWeight: "bold", fontSize: "16px"}}>${(+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording).toLocaleString()}</div>
                        <div style={{marginBottom: 3}}>${(loanInput.baseLoanAmount * loanInput.ufmipPercent ? loanInput.baseLoanAmount * loanInput.ufmipPercent : "0").toLocaleString()}</div>
                    </div>
                    <div class="pfourFive">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${(((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal).toLocaleString()}</div>
                        <div>${((x?.origination / 100) * loanInput.baseLoanAmount).toLocaleString()}</div>
                        <div>${((loanInput.creditDiscountGood * loanInput.baseLoanAmount) / 100) + loanInput.additionalGood}</div>
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
                <div class="pfourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Closing Cost Breakdown</div>
                <div class="pfourHorizontal" style={{gridColumn: "2 / 4"}}>Total Closing Costs</div>
                <div class="pfourHorizontal" style={{gridColumn: "4 / 5"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                <div class="pfourHorizontal" style={{gridColumn: "5 / 6"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                <div class="pfourHorizontal" style={{gridColumn: "6 / 7"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                
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
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(+loanInput.purchasePrice - +loanInput.baseLoanAmount).toLocaleString("en")}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.bestRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100).toLocaleString()}</div>
                        <div>${loanInput.monthlyTaxes * loanInput?.reservesTaxes}</div>
                        <div>${(loanInput.monthlyInsurance * loanInput?.reservesInsurance).toLocaleString()}</div>
                        <div>${Math.round(((Math.round(((+loanInput.bestRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100}</div>   
                    </div> 
                    <div class="pfiveFour">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(+loanInput.purchasePrice - +loanInput.baseLoanAmount).toLocaleString("en")}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.betterRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100).toLocaleString()}</div>
                        <div>${loanInput.monthlyTaxes * loanInput?.reservesTaxes}</div>
                        <div>${(loanInput.monthlyInsurance * loanInput?.reservesInsurance).toLocaleString()}</div>
                        <div>${Math.round(((Math.round(((+loanInput.betterRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100}</div>
                    </div>
                    <div class="pfiveFive">
                        <div style={{fontWeight: "bold", fontSize: "16px", marginTop: 3}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal)).toLocaleString()}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(+loanInput.purchasePrice - +loanInput.baseLoanAmount).toLocaleString("en")}</div>
                        <div style={{fontSize: "16px", fontWeight: "bold"}}>${(Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.goodRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100).toLocaleString()}</div>
                        <div>${loanInput.monthlyTaxes * loanInput?.reservesTaxes}</div>
                        <div>${(loanInput.monthlyInsurance * loanInput?.reservesInsurance).toLocaleString()}</div>
                        <div>${Math.round(((Math.round(((+loanInput.goodRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100}</div>
                    </div>
                </div>
                <div class="pfiveVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Cash Needed to Close</div>
                <div class="pfiveHorizontal" style={{gridColumn: "2 / 4"}}>Total Cash to Close / Cash Back</div>
                <div class="pfiveHorizontal" style={{gridColumn: "4 / 5"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal) + (+loanInput.purchasePrice - +loanInput.baseLoanAmount) + (Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.bestRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100)).toLocaleString()}</div>
                <div class="pfiveHorizontal" style={{gridColumn: "5 / 6"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal) + (+loanInput.purchasePrice - +loanInput.baseLoanAmount) + (Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.betterRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100)).toLocaleString()}</div>
                <div class="pfiveHorizontal" style={{gridColumn: "6 / 7"}}>${((+loanInput.titleInsurance + getTitleFeesData[0]?.closingFee + getTitleFeesData[0]?.cpl + getTitleFeesData[0]?.cplBorrower + getTitleFeesData[0]?.endorsements + getTitleFeesData[0]?.recordingServices + getTitleFeesData[0]?.recording) + (((x?.origination / 100) * loanInput.baseLoanAmount) + x?.underwriting + x?.taxService + x?.creditReport + x?.flood + x?.appraisal) + (+loanInput.purchasePrice - +loanInput.baseLoanAmount) + (Math.round(((loanInput.monthlyTaxes * loanInput.reservesTaxes) + (loanInput.monthlyInsurance * loanInput.reservesInsurance) + (Math.round((((((+loanInput.goodRate * (+loanInput.baseLoanAmount / 100)) / 365) * 1000) / 1000) * +loanInput.daysRequired) * 100) / 100)) * 100) / 100)).toLocaleString()}</div>

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