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
    
    return (
        <div>
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
                        <div>0.0</div>
                    </div>
                    <div class="twoThree">
                        <div style={{fontSize: "17px"}}>Best Rate / Higher Cost</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>30</div>
                    </div>
                    <div class="twoFour">
                        <div style={{fontSize: "17px"}}>Better Rate / Moderate Cost</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>30</div>
                    </div>
                    <div class="twoFive">
                        <div style={{fontSize: "17px"}}>Good Rate / Low Cost</div>
                        <div>${loanInput.baseLoanAmount.toLocaleString("en")}</div>
                        <div>30</div>
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
                        <div>${((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12}</div>
                        <div>${+loanInput.monthlyTaxes + +loanInput.monthlyInsurance}</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="threeFour">
                        <div>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.betterRate / 100) / 12) * (1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.betterRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</div>
                        <div>${((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12}</div>
                        <div>${+loanInput.monthlyTaxes + +loanInput.monthlyInsurance}</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="threeFive">
                        <div>${(Math.round((loanInput.baseLoanAmount * ((((loanInput.goodRate / 100) / 12) * (1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm)) / ((1 + ((loanInput.goodRate / 100) / 12))**(loanInput.loanTerm) - 1))) * 100) / 100).toLocaleString("en")}</div>
                        <div>${((loanInput.monthlyMIFactor * loanInput.baseLoanAmount) / 100) / 12}</div>
                        <div>${+loanInput.monthlyTaxes + +loanInput.monthlyInsurance}</div>
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
                        <div>Total Reamining MI Payments</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
                    <div class="fourTwo">
                        <div>$0.00</div>
                        <div>&nbsp;</div>
                        <div style={{fontWeight: "bold"}}>&nbsp;</div>
                        <div style={{fontWeight: "bold"}}>&nbsp;</div>
                    </div>
                    <div class="fourThree">
                        <div>$320,565.68</div>
                        <div>$0.00</div>
                        <div>-$84,183.50</div>
                        <div>-$159,522.51</div>
                    </div>
                    <div class="fourFour">
                        <div>$331,274.92</div>
                        <div>$0.00</div>
                        <div>-$86,667.32</div>
                        <div>-$164,384.53</div>
                    </div>
                    <div class="fourFive">
                        <div>$342,063.10</div>
                        <div>$0.00</div>
                        <div>-$89,154.34</div>
                        <div>-$169,259.46</div>
                    </div>
                </div>
                <div class="fourSix">
                    <div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>Savings over 5 years</div>
                    <div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>Savings over 10 years</div>
                </div>
                <div class="fourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Long Term Savings</div>
                <div class="fourHorizontal" style={{gridColumn: "2 / 4"}}>Savings Over Life of Loan</div>
                <div class="fourHorizontal" style={{gridColumn: "4 / 5"}}>-$320,565.68</div>
                <div class="fourHorizontal" style={{gridColumn: "5 / 6"}}>-$331,274.92</div>
                <div class="fourHorizontal" style={{gridColumn: "6 / 7"}}>-$342.063.10</div>

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