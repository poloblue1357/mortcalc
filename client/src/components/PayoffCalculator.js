import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"

function PayoffCalculator() {

    const context = useContext(MortgageContext)

    return (
        <div>
            <h1>Pay Off Calculator</h1>
            <table>
                <tbody>
                    <tr>
                        <td style={{border: "1px solid black"}}>Most Recent Known Loan Balance</td>
                        <td style={{border: "1px solid black"}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>How many payment have been or will be made <br /> 
                        from the last known loan balance to closing?</td>
                        <td style={{border: "1px solid black", backgroundColor: "white"}}>
                            <select>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Principal That Will Be Paid</td>
                        <td style={{border: "1px solid black"}}>$</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>New Loan Balance</td>
                        <td style={{border: "1px solid black"}}>$</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Skip 2 payments</td>
                        <td style={{border: "1px solid black", backgroundColor: "white"}}><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Estimated Days of Perdiem</td>
                        <td style={{border: "1px solid black"}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Accrued Interest</td>
                        <td style={{border: "1px solid black"}}>$</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Typical Fees from Prior Lender</td>
                        <td style={{border: "1px solid black"}}>$150.00</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>Estimated Payoff</td>
                        <td style={{border: "1px solid black"}}>$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PayoffCalculator