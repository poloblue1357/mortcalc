import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"


function AmortizationTablesdisplay(props) {

const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Amortization Tables</h1>
            <table>
                <tbody>
                    <tr>
                        <td style={{border: "solid 1px black"}}></td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                        <td style={{border: "solid 1px black"}}>$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AmortizationTablesdisplay