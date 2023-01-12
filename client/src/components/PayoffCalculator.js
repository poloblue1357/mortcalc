import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"

function PayoffCalculator(props) {

    const context = useContext(MortgageContext)
    const {editPayoffCalc, userAxios, handleSubmitPayoffCalc, checked, getPayoffCalc, pcInput, loanInput, getLoanInputs} = useContext(MortgageContext)

    useEffect(() => {
        getPayoffCalc()
        getLoanInputs()
    }, [])
    useEffect(() => {
        setPCInputInput(pcInput)
    }, [pcInput])

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
    
    let currentTable = [
        {
            balance: loanInput.firstLoanBalance,
            interest: loanInput.currentRate,
            payment: loanInput.rentPayment,
            MI: loanInput.currentMI,
            principal: 0,
            // extra
        }
    ]
    let c = 0
    function currentLoop() {
        const payment = Math.round((loanInput?.firstLoanBalance * ((((loanInput.currentRate / 100) / 12) * (1 + ((loanInput.currentRate / 100) / 12))**(loanInput.term)) / ((1 + ((loanInput.currentRate / 100) / 12))**(loanInput.term) - 1))) * 100) / 100
        const mortgageInsurance = ((loanInput.monthlyMIFactor * loanInput.firstLoanBalance) / 100) / 12
        while(currentTable[currentTable.length - 1].balance >= 0) {
            if(c === 0) {
                c++
            } else {
                let interest = (currentTable[currentTable.length-1].balance * ((loanInput.currentRate / 100) / 12))
                const newObj = {
                    balance: currentTable[currentTable.length - 1]?.balance - (payment - interest),
                    payment,
                    interest,
                    principal: payment - interest,
                    MI: ((mortgageInsurance[c] > (loanInput.appraisedValue * 0.8)) ?  currentTable[c - 1].MI : 0),
                    extra: currentTable[c - 1].extra
                }
                currentTable.push(newObj)
                // setBestArr(prevArr => ([...prevArr, newObj]))
            }
        }
        currentTable.splice(0, 1)
    }
    currentLoop()
    let principalPaid = 0
    if(pcInputInput.howManyPayments === null) {
        principalPaid = null
    } else if(pcInputInput.howManyPayments === 0) {
        principalPaid = 0
    } else if(pcInputInput.howManyPayments === 1) {
        principalPaid = currentTable[0].principal
    } else if(pcInputInput.howManyPayments === 2) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal)
    } else if(pcInputInput.howManyPayments === 3) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal + +currentTable[2].principal) 
    } else if(pcInputInput.howManyPayments === 4) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal + +currentTable[2].principal + +currentTable[3].principal)
    } else if(pcInputInput.howManyPayments === 5) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal + +currentTable[2].principal + +currentTable[3].principal + +currentTable[4].principal)
    } else if(pcInputInput.howManyPayments === 6) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal + +currentTable[2].principal + +currentTable[3].principal + +currentTable[4].principal + +currentTable[5].principal)
    } else if(pcInputInput.howManyPayments === 7) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal + +currentTable[2].principal + +currentTable[3].principal + +currentTable[4].principal + +currentTable[5].principal + +currentTable[6].principal)
    } else if(pcInputInput.howManyPayments === 8) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal + +currentTable[2].principal + +currentTable[3].principal + +currentTable[4].principal + +currentTable[5].principal + +currentTable[6].principal + +currentTable[7].principal)
    } else if(pcInputInput.howManyPayments === 9) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal + +currentTable[2].principal + +currentTable[3].principal + +currentTable[4].principal + +currentTable[5].principal + +currentTable[6].principal + +currentTable[7].principal + +currentTable[8].principal)
    } else if(pcInputInput.howManyPayments === 10) {
        principalPaid = (+currentTable[0].principal + +currentTable[1].principal + +currentTable[2].principal + +currentTable[3].principal + +currentTable[4].principal + +currentTable[5].principal + +currentTable[6].principal + +currentTable[7].principal + +currentTable[8].principal + +currentTable[9].principal)
    }
    

    function testing() {
        console.log(principalPaid)
        console.log(pcInput.howManyPayments)
    }

    return (
        <div>
            {/* <button onClick={testing}>testing</button> */}
            <h1>Pay Off Calculator</h1>
            <form onSubmit={event => {
                event.preventDefault()
                handleSubmitPayoffCalc()
            }}>
                <table style={{backgroundColor: "#c9daf8", borderCollapse: "collapse"}}>
                    <tbody style={{backgroundColor: "#c9daf8"}}>
                        <tr style={{backgroundColor: "#c9daf8"}}>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Most Recent Known Loan Balance</td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {loanInput?.firstLoanBalance}</td>
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
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {(Math.round((principalPaid) * 100) / 100).toLocaleString("en")}</td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>New Loan Balance</td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {(+loanInput?.firstLoanBalance + +(Math.round((principalPaid) * 100) / 100)).toLocaleString("en")}</td>
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
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>{pcInput.checked ? (31 - +loanInput.daysRequired) : ((31 - +loanInput.daysRequired) + 30)}</td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Accrued Interest</td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ {(Math.round(((+loanInput?.firstLoanBalance * +loanInput?.currentRate) / 365) * (pcInput.checked ? (31 - +loanInput?.daysRequired) : ((31 - +loanInput?.daysRequired) + 30)) * 100) / 100).toLocaleString("en")}</td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>Typical Fees from Prior Lender</td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>$ 
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
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8", fontWeight: "bold"}}>$ {((+loanInput?.firstLoanBalance + +(Math.round((principalPaid) * 100) / 100))+ +pcInput.typicalFees + +(Math.round(((+loanInput?.firstLoanBalance * +loanInput?.currentRate) / 365) * (pcInput.checked ? (31 - +loanInput?.daysRequired) : ((31 - +loanInput?.daysRequired) + 30)) * 100) / 100)).toLocaleString("en")}</td>
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