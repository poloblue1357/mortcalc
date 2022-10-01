import React from "react"

function LPSdisplay(props) {



    return (
        <div>
            <table>
                <tbody>
                    <tr >
                        <td style={{backgroundColor: "#4F97A3", textAlign: "center"}}>Loan Amount</td>
                        <td style={{backgroundColor: "#4F97A3", textAlign: "center"}}>Refinance</td>
                        <td style={{backgroundColor: "#4F97A3", textAlign: "center"}}>Purchases</td>
                    </tr>
                    <tr>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px"}}>$</td>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px",
                            backgroundColor: "#4B9CD3"}}>$</td>
                        <td style={{
                            border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px"}}>$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LPSdisplay