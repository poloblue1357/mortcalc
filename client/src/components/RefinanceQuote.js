import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import "./RefinanceQuote.css"
import beamLogo from "./beamlogo.png"
import contactInfo from "./contactinfo.png"
import customQuotes from "./custom quotes.png"
import pfp from "./pfp.png"

function RefinanceQuote() {

    const context = useContext(MortgageContext)
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`
    return (
        <div>
            <h1>Refinance Quote</h1>
            <div class="parent">
                 {/* <div class="one" style={{display: "flex"}}> */}
                 <div class="oneOne" style={{backgroundColor: "#334960", display: "flex"}}>
                        <img style={{height: 150, width: 270, display: "flex", justifyContent: "center", alignContent: "center", backgroundColor: "#334960", marginTop: 20, marginLeft: 10}} src={beamLogo}/>
                    </div>
                    <div class="oneTwo" style={{backgroundColor: "#334960", display: "grid"}}> 
                        <img style={{height: 120, width: 230, display: "flex",justifyContent: "left", alignContent: "center", backgroundColor: "#334960", marginTop: 10, marginRight: 30}} src={customQuotes}/>
                        <br />
                        <div style={{display: "flex", justifyContent: "center", alignContent: "center", backgroundColor: "#334960"}}>This is not a loan estimate*</div>
                    </div>
                    <div class="oneThree" style={{backgroundColor: "#334960", display: "grid"}}>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", alignItems: "center"}}>Name</div>
                        <br />
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Date: {date}</div>
                    </div>
                    <div class="oneFour" style={{backgroundColor: "#334960", display: "flex"}}>
                        <img style={{height: 150, width: 200, display: "flex", justifyContent: "center", alignContent: "center", backgroundColor: "#334960", marginTop: 25}} src={contactInfo}/>
                        <img style={{height: 150, width: 200, display: "flex", justifyContent: "center", alignContent: "center", backgroundColor: "#334960", marginTop: 20, marginLeft: 20}} src={pfp}/>
                        <br />
                        <div style={{backgroundColor: "#334960", display: "flex", fontSize: "14px", alignItems: "flex-end", justifyContent: "flex-start", marginBottom: 5}}>NMLS# 1097309</div>
                    </div>
                {/* </div> */}
                <div class="oneYellow" style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "22px", fontWeight: "bold"}}>
                Comparing Your Current Loan With Our Loan Offers
                </div>
                <div class="two" style={{display: "flex"}}>
                <div class="twoOne" style={{display: "grid"}}>
                    <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div>
                    {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Purchase Price</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Down Payment</div> */}
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Loan Amount</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Remaining Years</div>
                </div>
                <div class="twoTwo" style={{display: "grid"}}>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px", fontWeight: "bold"}}>Current Loan</div>
                    {/* <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>N/A</div>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>N/A</div> */}
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>0.0</div>
                </div>
                <div class="twoThree" style={{display: "grid"}}>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px"}}>Best Rate / Higher Cost</div>
                    {/* <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "16px"}}>$560,000.00</div>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$158,000.00</div> */}
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$402,000.00</div>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>30.0</div>
                </div>
                <div class="twoFour" style={{display: "grid"}}>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px"}}>Better Rate / Moderate Cost</div>
                    {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$560,000.00</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$158,000.00</div> */}
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$402,000.00</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>30.0</div>
                </div>
                <div class="twoFive" style={{display: "grid"}}>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px"}}>Good Rate / Low Cost</div>
                    {/* <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$560,000.00</div>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$158,000.00</div> */}
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$402,000.00</div>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>30.0</div>
                </div>
                </div> 
                <div class="twoVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px"}}>Loan Terms</div>
                {/* <div class="twoHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}> */}
                <div class="twoHorizontal1" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>Interest Rate</div>
                <div class="twoHorizontal2" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                <div class="twoHorizontal3" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.375%</div>
                <div class="twoHorizontal4" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.500%</div>
                <div class="twoHorizontal5" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.625%</div>
                {/* </div> */}
                <div class="three" style={{display: "flex"}}>
                <div class="threeOne" style={{display: "grid"}}>
                    {/* <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div> */}
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Principal & Interest</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Mortgage Insurance</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Add Taxes & Insurance</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Extra Principal Payment</div>
                </div>
                <div class="threeTwo" style={{display: "grid"}}>
                    {/* <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#d9ead3"}}>$0.00</div> */}
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                </div>
                <div class="threeThree" style={{display: "grid"}}>
                    {/* <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#cfe2f3"}}>$0.00</div> */}
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$2,007.13</div>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$0.00</div>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$450.00</div>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                </div>
                <div class="threeFour" style={{display: "grid"}}>
                    {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px", color: "white"}}>$0.00</div> */}
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$2,036.87</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$0.00</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$450.00</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                </div>
                <div class="threeFive" style={{display: "grid"}}>
                    {/* <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px", color: "#334960"}}>$0.00</div> */}
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$2,066.84</div>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$0.00</div>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$450.00</div>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                </div>
                </div>
                <div class="threeVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px"}}>Payment Breakdown</div>
                {/* <div class="threeHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}> */}
                <div class="threeHorizontal1" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>Total Payment</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>Monthly P&I / MI Savings**</div></div></div>
                <div class="threeHorizontal2" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$0.00</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>$0.00</div></div> </div>
                <div class="threeHorizontal3" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,457.13</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>-$2,007.13</div></div></div>
                <div class="threeHorizontal4" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,486.87</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>-$2,036.87</div></div></div>
                <div class="threeHorizontal5" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,516.84</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394", marginBottom: 3}}>-$2,066.84</div></div></div>
                {/* </div> */}
                <div class="four" style={{display: "flex"}}>
                <div class="fourOne" style={{display: "grid"}}>
                    {/* <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div> */}
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Total Remaining Interest</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Total Reamining MI Payments</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>&nbsp;</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>&nbsp;</div>
                </div>
                <div class="fourTwo" style={{display: "grid"}}>
                    {/* <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#d9ead3"}}>$0.00</div> */}
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>$0.00</div>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>&nbsp;</div>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                    <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>&nbsp;</div>
                </div>
                <div class="fourThree" style={{display: "grid"}}>
                    {/* <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#cfe2f3"}}>$0.00</div> */}
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$320,565.68</div>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$0.00</div>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>-$84,183.50</div>
                    <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>-$159,522.51</div>
                </div>
                <div class="fourFour" style={{display: "grid"}}>
                    {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px", color: "white"}}>$0.00</div> */}
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$331,274.92</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$0.00</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>-$86,667.32</div>
                    <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>-$164,384.53</div>
                </div>
                <div class="fourFive" style={{display: "grid"}}>
                    {/* <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px", color: "#334960"}}>$0.00</div> */}
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$342,063.10</div>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$0.00</div>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>-$89,154.34</div>
                    <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>-$169,259.46</div>
                </div>
                    <div class="fourSix" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#6fa8dc"}}>Savings over 5 years</div>
                        <div style={{backgroundColor: "#6fa8dc"}}>Savings over 10 years</div>
                    </div>
                </div>
                    <div class="fourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px"}}>Long Term Savings</div>
                    {/* <div class="fourHorizontal"> */}
                    <div class="fourHorizontal1" style={{backgroundColor: "#3d85c6", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>Savings Over Life of Loan</div>
                    {/* <div class="fourHorizontal2" style={{backgroundColor: "#3d85c6", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}></div> */}
                    <div class="fourHorizontal3" style={{backgroundColor: "#3d85c6", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>-$320,565.68</div>
                    <div class="fourHorizontal4" style={{backgroundColor: "#3d85c6", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>-$331,274.92</div>
                    <div class="fourHorizontal5" style={{backgroundColor: "#3d85c6", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>-$342.063.10</div>
                    {/* </div> */}
               {/* <div class="five" style={{display: "flex"}}> */}
               <div class="fiveOne" style={{display: "grid"}}>
                        {/* <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px", marginTop: 3}}>Beam Lending Costs</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Origination</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Lender Credit/Discount</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Underwriting</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Tax Service</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Credit Report</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Flood Certificate</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Appraisal</div>
                        <br />
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>Title Company Fees</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px", marginBottom: 3}}>Funding Fee / Upfront Mortgage Insurance (if applicable)</div>
                    </div>
                    <div class="fiveTwo" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#d9ead3"}}>$0.00</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}></div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}></div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}></div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}></div>
                    </div>
                    <div class="fiveThree" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#cfe2f3"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px", marginTop: 3}}>$3,776.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$2,010.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$8.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$635.00</div>
                        <br />
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$1,900.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px", marginBottom: 3}}>$0.00</div>
                    </div>
                    <div class="fiveFour" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px", color: "white"}}>$0.00</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px", marginTop: 3}}>$3,776.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$2,010.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$8.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$635.00</div>
                        <br />
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$1,900.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px", marginBottom: 3}}>$0.00</div>
                    </div>
                    <div class="fiveFive" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px", color: "#334960"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px", marginTop: 3}}>$3,776.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$2,010.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$8.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$635.00</div>
                        <br />
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$1,900.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px", marginBottom: 3}}>$0.00</div>
                    </div>
                {/* </div> */}
                <div class="fiveVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>Closing Cost Breakdown</div>
                {/* <div class="fiveHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}> */}
                    <div class="fiveHorizontal1" style={{backgroundColor: "#6fa8dc", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center", fontWeight: "bold"}}>Total Closing Costs</div> <div style={{fontSize: "15px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc", marginBottom: 3}}>Years to Break Even on Closing Costs</div></div></div>
                    {/* <div class="fiveHorizontal2" style={{backgroundColor: "#6fa8dc", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center"}}>$0.00</div> <div style={{fontSize: "15px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc"}}></div></div> </div> */}
                    <div class="fiveHorizontal3" style={{backgroundColor: "#6fa8dc", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$5,676.00</div> <div style={{fontSize: "15px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc", marginBottom: 3}}>0.2</div></div></div>
                    <div class="fiveHorizontal4" style={{backgroundColor: "#6fa8dc", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$5,676.00</div> <div style={{fontSize: "15px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc", marginBottom: 3}}>0.2</div></div></div>
                    <div class="fiveHorizontal5" style={{backgroundColor: "#6fa8dc", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#6fa8dc"}}><div style={{backgroundColor: "#6fa8dc", display: "flex", justifyContent: "center", fontWeight: "bold"}}>$5,676.00</div> <div style={{fontSize: "15px", justifyContent: "center", display: "flex", height: "14px", backgroundColor: "#6fa8dc", marginBottom: 3}}>0.2</div></div></div>
                {/* </div> */}
                {/* <div class="six" style={{display: "flex"}}> */}
                    <div class="sixOne" style={{display: "grid"}}>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px", marginTop: 3}}>Total Closing Costs</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>Plus Payoff of Prior Loan(s)</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>Plus Money for YOUR New Escrow Account & Prepaids</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Taxes</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Insurance</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Prepaid Interest</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px"}}>Minus Your New Loan Amount</div>
                    </div>
                    <div class="sixTwo"></div>
                    <div class="sixThree" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$2,010.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$0.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>   
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px"}}>$402,000.00</div>
                    </div> 
                    <div class="sixFour" style={{display: "grid"}}>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$2,010.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$0.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px"}}>$402,000.00</div>
                    </div>
                    <div class="sixFive" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px", marginTop: 3}}>$3,776.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$2,010.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$0.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px"}}>$402,000.00</div>
                    </div>
                    <div class="sixVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "23px"}}>Cash Needed to Close</div>
                    {/* <div class="sixHorizontal"> */}
                    {/* <div class="sixHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}> */}
                    <div class="sixHorizontal1" style={{backgroundColor: "#073763", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>Total Cash to Close / Cash Back</div>
                    {/* <div class="sixHorizontal2" style={{backgroundColor: "#334960", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}></div> */}
                    <div class="sixHorizontal3" style={{backgroundColor: "#073763", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$166,198.77</div>
                    <div class="sixHorizontal4" style={{backgroundColor: "#073763", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$166,219.42</div>
                    <div class="sixHorizontal5" style={{backgroundColor: "#073763", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$166,240.08</div>
                {/* </div> */}
                    {/* </div> */}
                {/* </div> */}

                {/* <div class="seven" style={{display: "flex"}}> */}
                <div class="sevenOne" style={{fontSize: "12px"}}><p style={{backgroundColor: "white", fontSize: "16px", marginLeft: 5}}>Your actual rate, payment, and costs could be higher.  Get an official Loan Estimate before choosing a loan.</p>
                        {/* <br /> */}
                        <p style={{backgroundColor: "white", fontSize: "14px", marginLeft: 5}}>*The Information provided herein reflects estimates of the charges which you would likely incur should you be approved for a loan. This is not a Loan Estimate required by Federal Law. If you make an application, your Loan Estimate will be sent to you in the opening package. This is not a commitment to lend, nor is it a rate lock, prequalification or pre-approval. This estimate is intended to assist you in evaluating a loan or home purchase using estimated closing and property costs. Closing and settlement cost, reserve deposits, Interest rate and APR are subject to change and the estimates shown above may be more or less depending on factors such as down payment, property type, appraisal and occupancy. Housing costs will vary depending on location, homeowner’s association dues, local and state fees, taxes, and hazard and mortgage insurance. You may wish to compare these estimated charges in considering the total cost of your mortgage.</p>
                    </div>
                    <div class="sevenTwo">Notes:</div>
                    <div class="sevenThree"></div> 
                    <div class="sevenFour"></div>
                    <div class="sevenFive"></div>
                    <div class="sevenVertical"></div>
                    <div class="sevenHorizontal"></div>
                {/* </div> */}
                {/* <div class="seven"></div> */}
            </div>
        </div>
    )
}

export default RefinanceQuote