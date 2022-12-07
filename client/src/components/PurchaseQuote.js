import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import "./PurchaseQuote.css"

function PurchaseQuote() {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Purchase Quote</h1>
            <div class="pparent">
                {/* <div class="pone" style={{display: "flex"}}> */}
                    <div class="poneOne" style={{backgroundColor: "#334960", display: "flex"}}>Image

                    </div>
                    <div class="poneTwo" style={{backgroundColor: "#334960", display: "flex"}}>Custom Quote Analysis for <br /> This is not a loan estimate*
                    
                    </div>
                    <div class="poneThree" style={{backgroundColor: "#334960", display: "flex"}}>Name <br /> Current Date
                    
                    </div>
                    <div class="poneFour" style={{backgroundColor: "#334960", display: "flex"}}>Prepared by: Chris Buckway / Image

                    </div>
                {/* </div> */}
                <div class="poneYellow" style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "22px", fontWeight: "bold"}}>
                    Comparing Your Current Loan With Our Loan Offers
                </div>
                <div class="ptwo" style={{display: "flex"}}>
                    <div class="ptwoOne" style={{display: "grid"}}>
                        <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Purchase Price</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Down Payment</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Loan Amount</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Loan Term</div>
                    </div>
                    <div class="ptwoTwo" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px", fontWeight: "bold"}}>Current Housing Expense</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>N/A</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontWeight: "bold"}}>N/A</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>0.0</div>
                    </div>
                    <div class="ptwoThree" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px"}}>Best Rate / Higher Cost</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "16px"}}>$560,000.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$158,000.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$402,000.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>30</div>
                    </div>
                    <div class="ptwoFour" style={{display: "grid"}}>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px"}}>Better Rate / Moderate Cost</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$560,000.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$158,000.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$402,000.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>30</div>
                    </div>
                    <div class="ptwoFive" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px"}}>Good Rate / Low Cost</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$560,000.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$158,000.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$402,000.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>30</div>
                    </div>
                </div> 
                <div class="ptwoVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px"}}>Loan Terms</div>
                {/* <div class="ptwoHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}> */}
                    <div class="ptwoHorizontal1" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>Interest Rate</div>
                    <div class="ptwoHorizontal2" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                    <div class="ptwoHorizontal3" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.375%</div>
                    <div class="ptwoHorizontal4" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.500%</div>
                    <div class="ptwoHorizontal5" style={{backgroundColor: "#7e9fce", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.625%</div>
                {/* </div> */}
                <div class="pthree" style={{display: "flex"}}>
                    <div class="pthreeOne" style={{display: "grid"}}>
                        {/* <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Principal & Interest</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Mortgage Insurance</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Add Taxes & Insurance</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Extra Principal Payment</div>
                    </div>
                    <div class="pthreeTwo" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#d9ead3"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>&nbsp;</div>
                    </div>
                    <div class="pthreeThree" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#cfe2f3"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$2,007.13</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>&nbsp;</div>
                    </div>
                    <div class="pthreeFour" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px", color: "white"}}>$0.00</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$2,036.87</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>&nbsp;</div>
                    </div>
                    <div class="pthreeFive" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px", color: "#334960"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$2,066.84</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>&nbsp;</div>
                    </div>
                </div>
                <div class="pthreeVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px"}}>Payment Breakdown</div>
                {/* <div class="pthreeHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}> */}
                    <div class="pthreeHorizontal1" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>House Payment</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394"}}>Difference</div></div></div>
                    <div class="pthreeHorizontal2" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$0.00</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394"}}>N/A</div></div> </div>
                    <div class="pthreeHorizontal3" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,457.13</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394"}}>N/A</div></div></div>
                    <div class="pthreeHorizontal4" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,486.87</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394"}}>N/A</div></div></div>
                    <div class="pthreeHorizontal5" style={{backgroundColor: "#0b5394", fontSize: "23px", display: "flex", justifyContent: "center", alignItems: "center"}}><div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50px", height: "0px", backgroundColor: "#0b5394"}}><div style={{backgroundColor: "#0b5394", display: "flex", justifyContent: "center"}}>$2,516.84</div> <div style={{fontSize: "14px", justifyContent: "center", display: "flex", flexShrink: '0', height: "12px", backgroundColor: "#0b5394"}}>N/A</div></div></div>
                {/* </div> */}
                {/* <div class="pfour" style={{display: "flex"}}> */}
                    <div class="pfourOne" style={{display: "grid"}}>
                        {/* <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>Beam Lending Costs</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Origination</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Lender Credit/Discount</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Underwriting</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Tax Service</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Credit Report</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Flood Certificate</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Appraisal</div>
                        <br />
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>Title Company Fees</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Funding Fee / Upfront Mortgage Insurance (if applicable)</div>
                    </div>
                    <div class="pfourTwo" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#d9ead3"}}>$0.00</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}></div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}></div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}></div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}></div>
                    </div>
                    <div class="pfourThree" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#cfe2f3"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$3,776.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$2,010.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$8.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$635.00</div>
                        <br />
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$1,900.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                    </div>
                    <div class="pfourFour" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px", color: "white"}}>$0.00</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$3,776.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$2,010.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$8.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$635.00</div>
                        <br />
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$1,900.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                    </div>
                    <div class="pfourFive" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px", color: "#334960"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$3,776.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$2,010.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$8.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$635.00</div>
                        <br />
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "18px"}}>$1,900.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$0.00</div>
                    </div>
                {/* </div> */}
                <div class="pfourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px"}}>Closing Cost Breakdown</div>
                {/* <div class="pfourHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}> */}
                    <div class="pfourHorizontal1" style={{backgroundColor: "#6fa8dc", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>Total Closing Costs</div>
                    {/* <div class="pfourHorizontal2" style={{backgroundColor: "#6fa8dc", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}></div> */}
                    <div class="pfourHorizontal3" style={{backgroundColor: "#6fa8dc", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,457.13</div>
                    <div class="pfourHorizontal4" style={{backgroundColor: "#6fa8dc", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,486.87</div>
                    <div class="pfourHorizontal5" style={{backgroundColor: "#6fa8dc", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,516.84</div>
                {/* </div> */}
                {/* <div class="pfive" style={{display: "flex"}}> */}
                    <div class="pfiveOne" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px"}}>Total Closing Costs</div>
                        <div style={{backgroundColor: "#white", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>Plus Down Payment</div>
                        <div style={{backgroundColor: "#white", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>Plus Money for YOUR New Escrow Account & Prepaids</div>
                        <div style={{backgroundColor: "#white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Taxes</div>
                        <div style={{backgroundColor: "#white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Insurance</div>
                        <div style={{backgroundColor: "#white", display: "flex", justifyContent: "center", fontSize: "14px"}}>Prepaid Interest</div>
                    </div>
                    <div class="pfiveTwo"></div>
                    <div class="pfiveThree" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px"}}>$3,776.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$2,010.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$0.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>   
                    </div> 
                    <div class="pfiveFour" style={{display: "grid"}}>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px"}}>$3,776.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$2,010.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$0.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                    </div>
                    <div class="pfiveFive" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontWeight: "bold", fontSize: "16px"}}>$3,776.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$2,010.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "16px", fontWeight: "bold"}}>$0.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$995.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$80.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "14px"}}>$48.00</div>
                    </div>
                    <div class="pfiveVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "23px"}}>Cash Needed to Close</div>
                    {/* <div class="pfiveHorizontal"> */}
                    {/* <div class="pfiveHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}> */}
                    <div class="pfiveHorizontal1" style={{backgroundColor: "#073763", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>Total Cash to Close / Cash Back</div>
                    {/* <div class="pfiveHorizontal2" style={{backgroundColor: "#334960", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}></div> */}
                    <div class="pfiveHorizontal3" style={{backgroundColor: "#073763", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$166,198.77</div>
                    <div class="pfiveHorizontal4" style={{backgroundColor: "#073763", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$166,219.42</div>
                    <div class="pfiveHorizontal5" style={{backgroundColor: "#073763", fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>$166,240.08</div>
                {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
                {/* <div class="psix" style={{display: "flex"}}> */}
                    <div class="psixOne" style={{fontSize: "12px"}}><p style={{backgroundColor: "white", fontSize: "16px"}}>Your actual rate, payment, and costs could be higher.  Get an official Loan Estimate before choosing a loan.</p>
                        {/* <br /> */}
                        <p style={{backgroundColor: "white", fontSize: "14px"}}>*The Information provided herein reflects estimates of the charges which you would likely incur should you be approved for a loan. This is not a Loan Estimate required by Federal Law. If you make an application, your Loan Estimate will be sent to you in the opening package. This is not a commitment to lend, nor is it a rate lock, prequalification or pre-approval. This estimate is intended to assist you in evaluating a loan or home purchase using estimated closing and property costs. Closing and settlement cost, reserve deposits, Interest rate and APR are subject to change and the estimates shown above may be more or less depending on factors such as down payment, property type, appraisal and occupancy. Housing costs will vary depending on location, homeowner’s association dues, local and state fees, taxes, and hazard and mortgage insurance. You may wish to compare these estimated charges in considering the total cost of your mortgage.</p>
                    </div>
                    <div class="psixTwo">Notes:</div>
                    <div class="psixThree"></div> 
                    <div class="psixFour"></div>
                    <div class="psixFive"></div>
                    <div class="psixVertical"></div>
                    <div class="psixHorizontal"></div>
                {/* </div> */}
                {/* <div class="seven"></div> */}
            </div>
        </div>
    )
}

export default PurchaseQuote