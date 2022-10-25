import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"

function PayoffCalculator() {

    const context = useContext(MortgageContext)

    const [pcInput, setPCInput] = useState()
    const [getPCInput, setGetPCInput] = useState([])

    return (
        <div>
            <h1>Pay Off Calculator</h1>
            <table style={{backgroundColor: "#c9daf8", borderCollapse: "collapse"}}>
                <tbody style={{backgroundColor: "#c9daf8"}}>
                    <tr style={{backgroundColor: "#c9daf8"}}>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Most Recent Known Loan Balance</td>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>How many payments have been or will be made <br /> 
                        from the last known loan balance to closing?</td>
                        <td style={{border: "1px solid black", backgroundColor: "white"}}>
                            <select style={{backgroundColor: "#c9daf8"}}>
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
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Principal That Will Be Paid</td>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>New Loan Balance</td>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Skip 2 payments</td>
                        <td style={{border: "1px solid black", backgroundColor: "white"}}>
                            <input type="checkbox" style={{backgroundColor: "#c9daf8"}}/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Estimated Days of Perdiem</td>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Accrued Interest</td>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Typical Fees from Prior Lender</td>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$150.00</td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Estimated Payoff</td>
                        <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PayoffCalculator