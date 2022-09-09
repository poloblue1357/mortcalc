import React, {useState, useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function Leadsdisplay(props) {

    const context = useContext(MortgageContext)

    const [editedLead, setEditedLead] = useState({
        date: props.l.date,
        campaign: props.l.campaign,
        status: props.l.status,
        loanType: props.l.loanType,
        loanPurpose: props.l.loanPurpose,
        firstName: props.l.firstName,
        lastName: props.l.lastName,
        coBorrower: props.l.coBorrower,
        phone: props.l.phone,
        email: props.l.email,
        currentRate: props.l.currentRate,
        googleReview: props.l.googleReview,
        lastContact: props.l.lastContact,
        notes: props.l.notes
    })
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
                        toggleEdit()
                        
                        context.editLeads(props.l._id, {date: editedLead.date, 
                                                        campaign: editedLead.campaign, 
                                                        status: editedLead.status,
                                                        loanType: editedLead.loanType,
                                                        loanPurpose: editedLead.loanPurpose,
                                                        firstName: editedLead.firstName,
                                                        lastName: editedLead.lastName,
                                                        coBorrower: editedLead.coBorrower,
                                                        phone: editedLead.phone,
                                                        email: editedLead.email,
                                                        currentRate: editedLead.currentRate,
                                                        googleReview: editedLead.googleReview,
                                                        lastContact: editedLead.lastContact,
                                                        notes: editedLead.notes
                                                        })
                    }}>
                        <input placeholder="Date" type="text" name="date" value={editedLead.date} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Campaign" type="text" name="campaign" onChange={handleChange} value={editedLead.campaign} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Status" type="text" name="status" onChange={handleChange} value={editedLead.status} style={{backgroundColor: "lightblue"}}/>
                        <select id="loanType" name="loanType" onChange={handleChange} value={editedLead.loanType} style={{backgroundColor: "lightblue"}}>
                            <option value={""}>Loan Type: </option>
                            <option>Conventional</option>
                            <option>1% Down</option>
                            <option>No Down Payment</option>
                            <option>FHA</option>
                            <option>VA</option>
                            <option>Commercial</option>
                            <option>Construction</option>
                        </select>
                        <select id="loanPurpose" name="loanPurpose" onChange={handleChange} value={editedLead.loanPurpose} style={{backgroundColor: "lightblue"}}>
                            <option value={""}>Loan Purpose: </option>
                            <option>Purchase</option>
                            <option>Lower Rate / Term</option>
                            <option>Cashout</option>
                        </select>
                        <input placeholder="First Name" type="text" name="firstName" onChange={handleChange} value={editedLead.firstName} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Last Name" type="text" name="lastName" onChange={handleChange} value={editedLead.lastName} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Co-Borrower" type="text" name="coBorrower" value={editedLead.coBorrower} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone (801-456-7890)" type="text" name="phone" value={editedLead.phone} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Email" type="text" name="email" value={editedLead.email} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Current Rate" type="text" name="currentRate" value={editedLead.currentRate} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <select id="googleReview" name="googleReview" onChange={handleChange} value={editedLead.googleReview} style={{backgroundColor: "lightblue"}}>
                            <option value={""}>Google Review:</option>
                            <option>Requested</option>
                            <option>Reviewed</option>
                        </select>
                        <input placeholder="Last Contact" type="text" name="lastContact" value={editedLead.lastContact} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Notes" type="text" name="notes" value={editedLead.notes} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
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
                        width: "80px", 
                        maxWidth: "80px",
                        backgroundColor: "lightblue"}}>{props.l.date}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "160px", 
                        maxWidth: "160px",
                        backgroundColor: "lightblue"}}>{props.l.campaign}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "250px", 
                        maxWidth: "250px",
                        backgroundColor: "lightblue"}}>{props.l.status}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "100px", 
                        maxWidth: "100px", 
                        backgroundColor: "lightblue"}}>{props.l.loanType}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "130px", 
                        maxWidth: "130px",
                        backgroundColor: "lightblue"}}>{props.l.loanPurpose}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "80px", 
                        maxWidth: "80px",
                        backgroundColor: "lightblue"}}>{props.l.firstName}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "100px", 
                        maxWidth: "100px",
                        backgroundColor: "lightblue"}}>{props.l.lastName}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "100px", 
                        maxWidth: "100px",
                        backgroundColor: "lightblue"}}>{props.l.coBorrower}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "100px", 
                        maxWidth: "100px",
                        backgroundColor: "lightblue"}}>{props.l.phone}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "200px", 
                        maxWidth: "200px",
                        backgroundColor: "lightblue"}}>{props.l.email}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "50px", 
                        maxWidth: "50px",
                        backgroundColor: "lightblue"}}>{props.l.currentRate}%</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "80px", 
                        maxWidth: "80px",
                        backgroundColor: "lightblue"}}>{props.l.googleReview}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "50px", 
                        maxWidth: "50px",
                        backgroundColor: "lightblue"}}>{props.l.lastContact}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "80px", 
                        maxWidth: "80px",
                        backgroundColor: "lightblue"}}>{props.l.notes}</td>
                        <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "40px", 
                        maxWidth: "40px",
                        backgroundColor: "lightblue"}}>
                        <button onClick={() => toggleEdit()}>Edit</button></td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "20px",
                        width: "60px", 
                        maxWidth: "60px",
                        backgroundColor: "lightblue"}}><button onClick={() => context.deleteLeads(props.l._id)}>Delete</button></td>
                </tr>
            }
        </div>
    )
}

export default Leadsdisplay