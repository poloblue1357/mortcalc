import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"
import Leadsdisplay from "./Leadsdisplay"

function Leads() {
    const context = useContext(MortgageContext)

    const l = context.getLeads.map(l => <Leadsdisplay l={l} key={l._id}/>)

    return (
        <div>
            <h1>Leads</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                context.handleSubmitLeads()
            }}>
                <input placeholder="Date" type="text" name="date" onChange={context.handleChangeLeads}/>
                <input placeholder="Campaign" type="text" name="campaign" onChange={context.handleChangeLeads}/>
                <input placeholder="Status" type="text" name="status" onChange={context.handleChangeLeads}/>
                <select id="loanType" name="loanType" onChange={context.handleChangeLeads}>
                    <option value={""}>Loan Type: </option>
                    <option>Conventional</option>
                    <option>1% Down</option>
                    <option>No Down Payment</option>
                    <option>FHA</option>
                    <option>VA</option>
                    <option>Commercial</option>
                    <option>Construction</option>
                </select>
                <select id="loanPurpose" name="loanPurpose" onChange={context.handleChangeLeads}>
                    <option value={""}>Loan Purpose: </option>
                    <option>Purchase</option>
                    <option>Lower Rate / Term</option>
                    <option>Cashout</option>
                </select>
                <input placeholder="First Name" type="text" name="firstName" value={context.firstName} onChange={context.handleChangeLeads}/>
                <input placeholder="Last Name" type="text" name="lastName" value={context.lastName} onChange={context.handleChangeLeads}/>
                <input placeholder="Co-Borrower" type="text" name="coBorrower" value={context.coBorrower} onChange={context.handleChangeLeads}/>
                <input placeholder="Phone" type="text" name="phone" value={context.phone} onChange={context.handleChangeLeads}/>
                <input placeholder="Email" type="text" name="email" value={context.email} onChange={context.handleChangeLeads}/>
                <input placeholder="Current Rate" type="text" name="currentRate" value={context.currentRate} onChange={context.handleChangeLeads}/>
                <select id="googleReview" name="googleReview" onChange={context.handleChangeLeads}>
                    <option value={""}>Google Review:</option>
                    <option>Requested</option>
                    <option>Reviewed</option>
                </select>
                <input placeholder="Last Contact" type="text" name="lastContact" value={context.lastContact} onChange={context.handleChangeLeads}/>
                <input placeholder="Notes" type="text" name="notes" value={context.notes} onChange={context.handleChangeLeads}/>
                <button type="submit">Submit</button>
            </form>
            {l}
        </div>
    )
}

export default Leads