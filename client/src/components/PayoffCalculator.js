import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"

function PayoffCalculator() {

    const context = useContext(MortgageContext)

    const initPCInputs = {typicalFees: "", howManyPayments: ""}
    const [pcInput, setPCInput] = useState(initPCInputs)
    const [checked, setChecked] = useState(false)
    const [getPCInput, setGetPCInput] = useState([])

    const handleChangePayoffCalc = (event) => {
        const {name, value} = event.target
        setPCInput(prevInput => ({...prevInput, [name]: value}))
    }
    const handleChangeCheckbox = () => {
        setChecked(!checked)
    }
    const handleSubmitPayoffCalc = () => {
        setGetPCInput([checked, pcInput])
        alert("Changes Saved")
        // console.log(getPCInput)
    }
    // const handleSubmitLeads = () => {
    //     userAxios.post("/api/leads", lead)
    //         .then(res => {
    //             setGetLeads(prevLead => [res.data, ...prevLead])
    //             setLead(initInputsLeads)
    //         })
    //         .catch(err => console.log(err.response.data.errMsg))
    // }

    return (
        <div>
            <h1>Pay Off Calculator</h1>
            <form onSubmit={event => {
                event.preventDefault()
                handleSubmitPayoffCalc()
            }}>
                <table style={{backgroundColor: "#c9daf8", borderCollapse: "collapse"}}>
                    <tbody style={{backgroundColor: "#c9daf8"}}>
                        <tr style={{backgroundColor: "#c9daf8"}}>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Most Recent Known Loan Balance</td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                How many payments have been or will be made <br /> 
                                from the last known loan balance to closing?
                            </td>
                            <td style={{border: "1px solid black", backgroundColor: "white", textAlign: "center"}}>
                                <select 
                                    style={{backgroundColor: "white", textAlign: "center"}}
                                    name="howManyPayments"
                                    value={pcInput.howManyPayments}
                                    onChange={handleChangePayoffCalc}    
                                >
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
                            <td style={{border: "1px solid black", backgroundColor: "white", textAlign: "center"}}>
                                <input 
                                    type="checkbox" 
                                    style={{backgroundColor: "#c9daf8"}}
                                    name="skipTwoPayments"
                                    checked={checked} 
                                    value={checked.checked}                                   
                                    onChange={handleChangeCheckbox}
                                />
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
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                <input placeholder="Fee Amount" 
                                    style={{backgroundColor: "white"}} 
                                    name="typicalFees"
                                    value={pcInput.typicalFees} 
                                    onChange={handleChangePayoffCalc}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>Estimated Payoff</td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$</td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" style={{backgroundColor: "#c9daf8", margin: "5px", padding: "5px"}}>Save Changes</button>
            </form>
        </div>
    )
}

export default PayoffCalculator