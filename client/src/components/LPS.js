import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import LPSdisplay from "./LPSdisplay"

function LPS() {

    const {handleSubmitLPS, userAxios, setGetLpsData, getLpsData} = useContext(MortgageContext)
    const context = useContext(MortgageContext)
    
    const y = [...getLpsData].sort((a, b) => a.loanAmount - b.loanAmount)
    const z = y.map(item => <LPSdisplay item={item} key={item._id}/>)

    useEffect(() => {
        userAxios.get("/api/lps")
            .then(res => {
                setGetLpsData(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <h1>Lender's Policy Schedule</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                handleSubmitLPS()
                event.target.reset()
            }}>
                <input placeholder="$ Loan Amount" type="number" name="loanAmount" value={context.loanAmount} onChange={context.handleChangeLPS} style={{backgroundColor: "#d9ead3"}}/>
                <input placeholder="$ Refinance" type="number" name="refinance" value={context.refinance} onChange={context.handleChangeLPS} style={{backgroundColor: "#cfe2f3"}}/>
                <input placeholder="$ Purchases" type="number" name="purchases" value={context.purchases} onChange={context.handleChangeLPS} style={{backgroundColor: "#d9ead3"}}/>
                <button type="submit" style={{backgroundColor: "black", color: "white"}}>Submit!</button>
            </form>
            <br />
            <br />
            <table style={{borderCollapse: "collapse"}}>
                <tbody>
                    <tr >
                        <td style={{backgroundColor: "#4a86e8", textAlign: "center",border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px",
                            color: "white"}}>Loan Amount</td>
                        <td style={{backgroundColor: "#4a86e8", textAlign: "center", border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px",
                            color: "white"}}>Refinance</td>
                        <td style={{backgroundColor: "#4a86e8", textAlign: "center", border: "1px solid black", 
                            padding: "5px", 
                            height: "18px", 
                            width: "134px",
                            color: "white"}}>Purchases</td>
                    </tr>
                </tbody>
            </table>
            {z}
        </div>
    )
}

export default LPS