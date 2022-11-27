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
                    <div class="ptwoOne"></div>
                    <div class="ptwoTwo"></div>
                    <div class="ptwoThree"></div> 
                    <div class="ptwoFour"></div>
                    <div class="ptwoFive"></div>
                    <div class="ptwoVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px"}}>Loan Terms</div>
                    <div class="ptwoHorizontal"></div> 
                </div> 
                <div class="pthree" style={{display: "flex"}}>
                    <div class="pthreeOne"></div>
                    <div class="pthreeTwo"></div>
                    <div class="pthreeThree"></div> 
                    <div class="pthreeFour"></div>
                    <div class="pthreeFive"></div>
                    <div class="pthreeVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Breakdown <br /> Payment</div>
                    <div class="pthreeHorizontal"></div>
                </div>
                <div class="pfour" style={{display: "flex"}}>
                    <div class="pfourOne"></div>
                    <div class="pfourTwo"></div>
                    <div class="pfourThree"></div> 
                    <div class="pfourFour"></div>
                    <div class="pfourFive"></div>
                    <div class="pfourVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>Breakdown <br />Closing Cost</div>
                    <div class="pfourHorizontal"></div>
                </div>
                <div class="pfive" style={{display: "flex"}}>
                    <div class="pfiveOne"></div>
                    <div class="pfiveTwo"></div>
                    <div class="pfiveThree"></div> 
                    <div class="pfiveFour"></div>
                    <div class="pfiveFive"></div>
                    <div class="pfiveVertical" style={{writingMode: "vertical-lr", transform: "rotate(-180deg)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "18px"}}>to Close<br />Cash Needed </div>
                    <div class="pfiveHorizontal"></div>
                </div>
                <div class="psix" style={{display: "flex"}}>
                    <div class="psixOne" style={{fontSize: "12px"}}>Your actual rate, payment, and costs could be higher.  Get an official Loan Estimate before choosing a loan.
                        <br />
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