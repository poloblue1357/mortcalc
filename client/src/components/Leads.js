import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import Leadsdisplay from "./Leadsdisplay"
import axios from "axios"

function Leads() {

    const context = useContext(MortgageContext)

    const l = context.getLeads.map(l => <Leadsdisplay l={l} key={l._id}/>)

    useEffect(() => {
        axios.get("/leads")
            .then(res => context.setGetLeads(res.data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get("/status")
            .then(res => context.setGetStatusLeads(res.data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get("/campaigns")
            .then(res => context.setGetCampaignsLeads(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Leads</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                context.handleSubmitLeads()
            }}>
                <input placeholder="Date" type="text" name="date" value={context.date} onChange={context.handleChangeLeads}/>
                <input placeholder="Campaign" type="text" name="campaign" value={context.campaign} onChange={context.handleChangeLeads}/>
                <input placeholder="Status" type="text" name="status" value={context.status} onChange={context.handleChangeLeads}/>
                <select id="loanType" name="loanType" value={context.loanType} onChange={context.handleChangeLeads}>
                    <option value={""}>Loan Type: </option>
                    <option>Conventional</option>
                    <option>1% Down</option>
                    <option>No Down Payment</option>
                    <option>FHA</option>
                    <option>VA</option>
                    <option>Commercial</option>
                    <option>Construction</option>
                </select>
                <select id="loanPurpose" name="loanPurpose" value={context.loanPurpose} onChange={context.handleChangeLeads}>
                    <option value={""}>Loan Purpose: </option>
                    <option>Purchase</option>
                    <option>Lower Rate / Term</option>
                    <option>Cashout</option>
                </select>
                <input placeholder="First Name" type="text" name="firstName" value={context.firstName} onChange={context.handleChangeLeads}/>
                <input placeholder="Last Name" type="text" name="lastName" value={context.lastName} onChange={context.handleChangeLeads}/>
                <input placeholder="Co-Borrower" type="text" name="coBorrower" value={context.coBorrower} onChange={context.handleChangeLeads}/>
                <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone (801-456-7890)" type="text" name="phone" value={context.phone} onChange={context.handleChangeLeads}/>
                <input placeholder="Email" type="text" name="email" value={context.email} onChange={context.handleChangeLeads}/>
                <input placeholder="Current Rate" type="text" name="currentRate" value={context.currentRate} onChange={context.handleChangeLeads}/>
                <select id="googleReview" name="googleReview" value={context.googleReview} onChange={context.handleChangeLeads}>
                    <option value={""}>Google Review:</option>
                    <option>Requested</option>
                    <option>Reviewed</option>
                </select>
                <input placeholder="Last Contact" type="text" name="lastContact" value={context.lastContact} onChange={context.handleChangeLeads}/>
                <input placeholder="Notes" type="text" name="notes" value={context.notes} onChange={context.handleChangeLeads}/>
                <button type="submit">Submit</button>
            </form>
            <br />
            <br />
            <table style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
                <tbody>
                    <tr style={{display: "flex", justifyContent: "center", alignItems: "center", backgrounColor: "lightblue"}}>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Date</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Campaign</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Status</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Loan Type</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Loan Purpose</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>First Name</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Last Name</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Co-Borrower</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                type: "phone"
                }}>Phone</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Email</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Current Rate</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Google Review</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Last Contact</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "20px",
                }}>Notes</td>
                    </tr>
                </tbody>
            </table>
            <table style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
                <tbody>
                    {l}
                </tbody>
            </table>
        </div>
    )
}

export default Leads