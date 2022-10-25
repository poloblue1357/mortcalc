import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function LPSdisplay(props) {

    const context = useContext(MortgageContext)

    return (
        <div>
            <table style={{borderCollapse: "collapse"}}>
                <tbody>
                    <tr style={{display: "flex", justifyContent: "center"}}>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px",
                            display: "flex", justifyContent: "center"}}>$ {props.item.loanAmount.toLocaleString()}</td>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px",
                            backgroundColor: "#cfe2f3",
                            display: "flex", justifyContent: "center"}}>$ {props.item.refinance.toLocaleString()}</td>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px",
                            display: "flex", justifyContent: "center"}}>$ {props.item.purchases.toLocaleString()}</td>
                        <button onClick={() => context.deleteLPS(props.item._id)}>Delete</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LPSdisplay