import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import "./PurchaseQuote.css"

function PurchaseQuote() {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Purchase Quote</h1>
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
                    <div class="sixOne"></div>
                    <div class="sixTwo"></div>
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

export default PurchaseQuote