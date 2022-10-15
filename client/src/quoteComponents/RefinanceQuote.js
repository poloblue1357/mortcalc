import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import "./RefinanceQuote.css"

function RefinanceQuote() {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Refinance Quote</h1>
            <div class="parent">
                <div class="one">
                    <div class="oneYellow" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Comparing Your Current Loan With Our Loan Offers
                    </div>
                </div>
                <div class="two" style={{display: "flex"}}>
                    <div class="twoOne"></div>
                    <div class="twoTwo"></div>
                    <div class="twoThree"></div> 
                    <div class="twoFour"></div>
                    <div class="twoFive"></div>
                    <div class="twoVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px"}}>Loan Terms</div>
                    <div class="twoHorizontal"></div> 
                </div> 
                <div class="three" style={{display: "flex"}}>
                    <div class="threeOne"></div>
                    <div class="threeTwo"></div>
                    <div class="threeThree"></div> 
                    <div class="threeFour"></div>
                    <div class="threeFive"></div>
                    <div class="threeVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Payment Breakdown</div>
                    <div class="threeHorizontal"></div>
                </div>
                <div class="four" style={{display: "flex"}}>
                    <div class="fourOne"></div>
                    <div class="fourTwo"></div>
                    <div class="fourThree"></div> 
                    <div class="fourFour"></div>
                    <div class="fourFive"></div>
                    <div class="fourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "15px"}}>Closing Cost Breakdown</div>
                    <div class="fourHorizontal"></div>
                </div>
                <div class="five" style={{display: "flex"}}>
                    <div class="fiveOne"></div>
                    <div class="fiveTwo"></div>
                    <div class="fiveThree"></div> 
                    <div class="fiveFour"></div>
                    <div class="fiveFive"></div>
                    <div class="fiveVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Cash Needed to Close</div>
                    <div class="fiveHorizontal"></div>
                </div>
                <div class="six" style={{display: "flex"}}>
                    <div class="sixOne" style={{fontSize: "12px"}}>Your actual rate, payment, and costs could be higher.  Get an official Loan Estimate before choosing a loan.
                        <br />
                        *The Information provided herein reflects estimates of the charges which you would likely incur should you be approved for a loan. This is not a Loan Estimate required by Federal Law. If you make an application, your Loan Estimate will be sent to you in the opening package. This is not a commitment to lend, nor is it a rate lock, prequalification or pre-approval. This estimate is intended to assist you in evaluating a loan or home purchase using estimated closing and property costs. Closing and settlement cost, reserve deposits, Interest rate and APR are subject to change and the estimates shown above may be more or less depending on factors such as down payment, property type, appraisal and occupancy. Housing costs will vary depending on location, homeowner’s association dues, local and state fees, taxes, and hazard and mortgage insurance. You may wish to compare these estimated charges in considering the total cost of your mortgage.
                    </div>
                    <div class="sixTwo">Notes:</div>
                    <div class="sixThree"></div> 
                    <div class="sixFour"></div>
                    <div class="sixFive"></div>
                    <div class="sixVertical"></div>
                    <div class="sixHorizontal"></div>
                </div>
                {/* <div class="seven"></div> */}
            </div>
        </div>
    )
}

export default RefinanceQuote