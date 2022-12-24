import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"
import "./AmortizationTables.css"

function ATRightSide(props) {
    return (
        <div class="rightMap" style={{padding: "3.999px 0px"}}>
            {props.l+1}
        </div>
    )
}

export default ATRightSide