import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"

function PayoffCalculator(props) {

    const context = useContext(MortgageContext)
    const {editPayoffCalc, userAxios, handleSubmitPayoffCalc, checked, getPayoffCalc, pcInput} = useContext(MortgageContext)

    useEffect(() => {
        getPayoffCalc()
    }, [])
    useEffect(() => {
        setPCInputInput(pcInput)
    }, [pcInput])

    // const testing = () => {
    //     console.log(
    //             pcInput[0]._id, 
    //             pcInput, 
    //             pcInput[0].checked,
    //             checked
    //     )
    // }
    // const initPCInputs = {typicalFees: context.typicalFees, howManyPayments: context.howManyPayments, checked: checked}
    // const [checked, setChecked] = useState()
    const [pcInputInput, setPCInputInput] = useState({typicalFees: pcInput.typicalFees, checked: pcInput.checked, howManyPayments: pcInput.howManyPayments})
    const [getPCInput, setGetPCInput] = useState([])

    const handleChangePayoffCalc = (event) => {
        const {name, value, type, checked} = event.target
        setPCInputInput(prevInput => {
            if(type === "checkbox")
                return ({...prevInput, [name]: checked})
            return ({...prevInput, [name]: value})
        }) 
    }
    // const handleChangeCheckbox = () => {
    //     setChecked(!checked)
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
                                    value={pcInputInput.howManyPayments}
                                    onChange={handleChangePayoffCalc}    
                                >
                                    <option></option>
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
                                    name="checked"
                                    checked={pcInputInput.checked}                              
                                    onChange={handleChangePayoffCalc}
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
                                    value={pcInputInput.typicalFees} 
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
            <button type="button" style={{backgroundColor: "black", color: "white", margin: "5px", padding: "10px"}} onClick={() => 
                editPayoffCalc(pcInput._id, {howManyPayments: pcInputInput.howManyPayments, checked: pcInputInput.checked, typicalFees: pcInputInput.typicalFees})}
            >Update</button>
                <div style={{display: "flex"}}>
                    <button type="submit" style={{backgroundColor: "#c9daf8", margin: "5px", padding: "5px"}}>Submit Inputs</button>
                    <p>(Submit is only for initial inputs)</p>
                </div>
            </form>

            {/* <button type="button" onClick={() => testing()}>testing</button> */}
        </div>
    )
}

export default PayoffCalculator