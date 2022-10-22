import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"


function QuickDTI() {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Quick DTI</h1>
            <table>
                <tbody>
                    <tr>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}>Input3</td>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}>Input 4</td>
                        <td style={{border: "1px solid black"}}>Input 3 / 12</td>
                        <td style={{border: "1px solid black"}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}>1500</td>
                        <td style={{border: "1px solid black"}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Input 1</td>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}>Sum of D3:D4 (1500 + 3333.33</td>
                        <td style={{border: "1px solid black"}}>Sum of D3:D4 (1500 + 3333.33</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Input 2</td>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default QuickDTI