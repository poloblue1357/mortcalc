import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function LPSdisplay(props) {

    const context = useContext(MortgageContext)

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px"}}>$ {props.item.loanAmount.toLocaleString()}</td>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px",
                            backgroundColor: "#cfe2f3"}}>$ {props.item.refinance.toLocaleString()}</td>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px"}}>$ {props.item.purchases.toLocaleString()}</td>
                        <button onClick={() => context.deleteLPS(props.item._id)}>Delete</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LPSdisplay