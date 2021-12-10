import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function Realtors() {
    const context = useContext(MortgageContext)
    return (
        <div>
            <h1>Realtors</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                context.handleSubmitRealtors()
            }}>
                <input placeholder="Date" type="text" name="date" value={context.date} onChange={context.handleChangeRealtors}/>
                <input placeholder="Campaign" type="text" name="campaign" value={context.campaign} onChange={context.handleChangeRealtors}/>
                <input placeholder="Status" type="text" name="status" value={context.status} onChange={context.handleChangeRealtors}/>
                {/* <select id="loanType" name="loanType" onChange={context.handleChange}>
                    <option value={""}>Loan Type: </option>
                    <option>Conventional</option>
                    <option>1% Down</option>
                    <option>No Down Payment</option>
                    <option>FHA</option>
                    <option>VA</option>
                    <option>Commercial</option>
                    <option>Construction</option>
                </select> */}
                {/* <select id="loanPurpose" name="loanPurpose" onChange={context.handleChange}>
                    <option value={""}>Loan Purpose: </option>
                    <option>Purchase</option>
                    <option>Lower Rate / Term</option>
                    <option>Cashout</option>
                </select> */}
                <input placeholder="First Name" type="text" name="firstName" value={context.firstName} onChange={context.handleChangeRealtors}/>
                <input placeholder="Last Name" type="text" name="lastName" value={context.lastName} onChange={context.handleChangeRealtors}/>
                <input placeholder="Brokerage" type="text" name="brokerage" value={context.brokerage} onChange={context.handleChangeRealtors}/>
                <input placeholder="Phone" type="text" name="phone" value={context.phone} onChange={context.handleChangeRealtors}/>
                <input placeholder="Email" type="text" name="email" value={context.email} onChange={context.handleChangeRealtors}/>
                {/* <input placeholder="Current Rate" type="text" name="currentRate" value={context.currentRate} onChange={context.handleChangeRealtors}/> */}
                <input placeholder="# of Contacts" type="text" name="numberOfContacts" onChange={context.handleChangeRealtors}/>
                <input placeholder="Golfer" type="text" name="golfer" onChange={context.handleChangeRealtors}/>                
                {/* <select id="googleReview" name="googleReview" onChange={context.handleChange}>
                    <option value={""}>Google Review:</option>
                    <option>Requested</option>
                    <option>Reviewed</option>
                </select> */}
                <input placeholder="Last Contact" type="text" name="lastContact" value={context.lastContact} onChange={context.handleChangeRealtors}/>
                <input placeholder="Notes" type="text" name="notes" value={context.notes} onChange={context.handleChangeRealtors}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Realtors