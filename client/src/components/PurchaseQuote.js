import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import "./PurchaseQuote.css"

function PurchaseQuote() {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Purchase Quote</h1>
            <div class="pparent">
                <div class="pone" style={{display: "flex"}}>
                    <div class="poneYellow" style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>
                        Comparing Your Current Loan With Our Loan Offers
                    </div>
                </div>
                <div class="ptwo" style={{display: "flex"}}>
                    <div class="ptwoOne" style={{display: "grid"}}>
                        <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "16px"}}>Purchase Price</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Down Payment</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Loan Amount</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Loan Amount</div>
                    </div>
                    <div class="ptwoTwo" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px"}}>Current Housing Expense</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>N/A</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>N/A</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>0.0</div>
                    </div>
                    <div class="ptwoThree" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px"}}>Best Rate / Higher Cost</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>N/A</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>N/A</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>0.0</div>
                    </div>
                    <div class="ptwoFour" style={{display: "grid"}}>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px"}}>Better Rate / Moderate Cost</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>N/A</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>N/A</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>0.0</div>
                    </div>
                    <div class="ptwoFive" style={{display: "grid"}}>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px"}}>Good Rate / Low Cost</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>N/A</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>N/A</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>0.0</div>
                    </div>
                    <div class="ptwoVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px"}}>Loan Terms</div>
                </div> 
                <div class="ptwoHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                    <div class="ptwoHorizontal1" style={{backgroundColor: "#7e9fce", fontSize: "22px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>Interest Rate</div>
                    <div class="ptwoHorizontal2" style={{backgroundColor: "#7e9fce", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                    <div class="ptwoHorizontal3" style={{backgroundColor: "#7e9fce", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.375%</div>
                    <div class="ptwoHorizontal4" style={{backgroundColor: "#7e9fce", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.500%</div>
                    <div class="ptwoHorizontal5" style={{backgroundColor: "#7e9fce", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>4.625%</div>
                </div>
                <div class="pthree" style={{display: "flex"}}>
                    <div class="pthreeOne" style={{display: "grid"}}>
                        {/* <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div> */}
                        <div style={{backgroundColor: "white"}}>Principal & Interest</div>
                        <div style={{backgroundColor: "white"}}>Mortgage Insurance</div>
                        <div style={{backgroundColor: "white"}}>Add Taxes & Insurance</div>
                        <div style={{backgroundColor: "white"}}>Extra Principle Payment</div>
                    </div>
                    <div class="pthreeTwo" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#d9ead3"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>Unknown</div>
                        <div style={{backgroundColor: "#d9ead3", display: "flex", justifyContent: "center"}}>test</div>
                    </div>
                    <div class="pthreeThree" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center", fontSize: "18px", color: "#cfe2f3"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$2,007.13</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>test</div>
                    </div>
                    <div class="pthreeFour" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px", color: "white"}}>$0.00</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$2,036.87</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>test</div>
                    </div>
                    <div class="pthreeFive" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px", color: "#334960"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$2,066.84</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>test</div>
                    </div>
                    <div class="pthreeVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px"}}>Payment Breakdown</div>
                </div>
                <div class="pthreeHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                    <div class="pthreeHorizontal1" style={{backgroundColor: "#0b5394", fontSize: "22px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>House Payment</div>
                    <div class="pthreeHorizontal2" style={{backgroundColor: "#0b5394", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>$0.00</div>
                    <div class="pthreeHorizontal3" style={{backgroundColor: "#0b5394", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,457.13</div>
                    <div class="pthreeHorizontal4" style={{backgroundColor: "#0b5394", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,486.87</div>
                    <div class="pthreeHorizontal5" style={{backgroundColor: "#0b5394", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,516.84</div>
                </div>
                <div class="pfour" style={{display: "flex"}}>
                <div class="pfourOne" style={{display: "grid"}}>
                        {/* <div style={{color: 'white', backgroundColor: "white", display: "flex", justifyContent: "center"}}>blank</div> */}
                        <div style={{backgroundColor: "white"}}>Principal & Interest</div>
                        <div style={{backgroundColor: "white"}}>Mortgage Insurance</div>
                        <div style={{backgroundColor: "white"}}>Add Taxes & Insurance</div>
                        <div style={{backgroundColor: "white"}}>Extra Principle Payment</div>
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
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$2,007.13</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "#cfe2f3", display: "flex", justifyContent: "center"}}>test</div>
                    </div>
                    <div class="pfourFour" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "white", display: "flex", justifyContent: "center", fontSize: "18px", color: "white"}}>$0.00</div> */}
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$2,036.87</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "white", display: "flex", justifyContent: "center"}}>test</div>
                    </div>
                    <div class="pfourFive" style={{display: "grid"}}>
                        {/* <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center", fontSize: "18px", color: "#334960"}}>$0.00</div> */}
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$2,066.84</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$0.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>$450.00</div>
                        <div style={{backgroundColor: "#334960", display: "flex", justifyContent: "center"}}>test</div>
                    </div>
                    <div class="pfourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px"}}>Closing Cost Breakdown</div>
                </div>
                <div class="pfourHorizontal" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                    <div class="pfourHorizontal1" style={{backgroundColor: "#6fa8dc", fontSize: "22px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>Total Closing Costs</div>
                    <div class="pfourHorizontal2" style={{backgroundColor: "#6fa8dc", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                    <div class="pfourHorizontal3" style={{backgroundColor: "#6fa8dc", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,457.13</div>
                    <div class="pfourHorizontal4" style={{backgroundColor: "#6fa8dc", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,486.87</div>
                    <div class="pfourHorizontal5" style={{backgroundColor: "#6fa8dc", fontSize: "22px", display: "flex", justifyContent: "center", alignItems: "center"}}>$2,516.84</div>
                </div>
                <div class="pfive" style={{display: "flex"}}>
                    <div class="pfiveOne"></div>
                    <div class="pfiveTwo">hello</div>
                    <div class="pfiveThree">hello</div> 
                    <div class="pfiveFour"></div>
                    <div class="pfiveFive">hello</div>
                    <div class="pfiveVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px"}}>Cash Needed to Close</div>
                    <div class="pfiveHorizontal"></div>
                </div>
                <div class="psix" style={{display: "flex"}}>
                    <div class="psixOne" style={{fontSize: "12px"}}><p style={{backgroundColor: "white", fontSize: "16px"}}>Your actual rate, payment, and costs could be higher.  Get an official Loan Estimate before choosing a loan.</p>
                        {/* <br /> */}
                        *The Information provided herein reflects estimates of the charges which you would likely incur should you be approved for a loan. This is not a Loan Estimate required by Federal Law. If you make an application, your Loan Estimate will be sent to you in the opening package. This is not a commitment to lend, nor is it a rate lock, prequalification or pre-approval. This estimate is intended to assist you in evaluating a loan or home purchase using estimated closing and property costs. Closing and settlement cost, reserve deposits, Interest rate and APR are subject to change and the estimates shown above may be more or less depending on factors such as down payment, property type, appraisal and occupancy. Housing costs will vary depending on location, homeowner’s association dues, local and state fees, taxes, and hazard and mortgage insurance. You may wish to compare these estimated charges in considering the total cost of your mortgage.
                    </div>
                    <div class="psixTwo">Notes:</div>
                    <div class="psixThree"></div> 
                    <div class="psixFour"></div>
                    <div class="psixFive"></div>
                    <div class="psixVertical"></div>
                    <div class="psixHorizontal"></div>
                </div>
                {/* <div class="seven"></div> */}
            </div>
        </div>
    )
}

export default PurchaseQuote