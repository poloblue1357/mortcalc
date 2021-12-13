import React, {useState, useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function Leadsdisplay(props) {

    const context = useContext(MortgageContext)

    const [editedLead, setEditedLead] = useState([{
        date: props.l.date,
        campaign: "",
        status: "",
        loanType: "",
        loanPurpose: "",
        firstName: "",
        lastName: "",
        coBorrower: "",
        phone: "",
        email: "",
        currentRate: "",
        googleReview: "",
        lastContact: "",
        notes: ""
    }])
    console.log(props.l.date)
    const [isEdit, setIsEdit] = useState(false)

    const toggleEdit = () => {
        setIsEdit(prevEdit => prevEdit ? false : true
    )}
    const handleChange = (event) => {
        const {name, value} = event.target
        setEditedLead(prevInput => ({...prevInput, [name]: value}))
    }

    return (
        <div>
            {isEdit ? 
                <div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        context.editLeads()
                        toggleEdit()
                    }}>
                        <input placeholder="Date" type="text" name="date" value={editedLead.date} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Campaign" type="text" name="campaign" onChange={handleChange} value={props.l.campaign} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Status" type="text" name="status" onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <select id="loanType" name="loanType" onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}>
                            <option value={""}>Loan Type: </option>
                            <option>Conventional</option>
                            <option>1% Down</option>
                            <option>No Down Payment</option>
                            <option>FHA</option>
                            <option>VA</option>
                            <option>Commercial</option>
                            <option>Construction</option>
                        </select>
                        <select id="loanPurpose" name="loanPurpose" onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}>
                            <option value={""}>Loan Purpose: </option>
                            <option>Purchase</option>
                            <option>Lower Rate / Term</option>
                            <option>Cashout</option>
                        </select>
                        <input placeholder="First Name" type="text" name="firstName" value={context.firstName} onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Last Name" type="text" name="lastName" value={context.lastName} onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Co-Borrower" type="text" name="coBorrower" value={context.coBorrower} onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone (801-456-7890)" type="text" name="phone" value={context.phone} onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Email" type="text" name="email" value={context.email} onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Current Rate" type="text" name="currentRate" value={context.currentRate} onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <select id="googleReview" name="googleReview" onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}>
                            <option value={""}>Google Review:</option>
                            <option>Requested</option>
                            <option>Reviewed</option>
                        </select>
                        <input placeholder="Last Contact" type="text" name="lastContact" value={context.lastContact} onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Notes" type="text" name="notes" value={context.notes} onChange={context.handleChangeLeads} style={{backgroundColor: "lightblue"}}/>
                        <button type="submit" style={{backgroundColor: "lightblue"}}>Submit</button>
                    </form>
                    <button onClick={() => toggleEdit()} style={{backgroundColor: "lightblue"}}>Cancel Edit</button>
                </div>
            :
                <tr style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightblue"}}>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.date}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.campaign}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.status}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "10px 0px", 
                        height: "20px",
                        maxWidth: "160px",
                        width: "160px", 
                        backgroundColor: "lightblue"}}>{props.l.loanType}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.loanPurpose}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.firstName}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.lastName}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.coBorrower}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.phone}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.email}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.currentRate}%</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.googleReview}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.lastContact}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>{props.l.notes}</td>
                        <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}>
                        <button onClick={() => toggleEdit()}>Edit</button></td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        backgroundColor: "lightblue"}}><button onClick={() => context.deleteLeads(props.l._id)}>Delete</button></td>
                </tr>
            }
        </div>
    )
}

export default Leadsdisplay