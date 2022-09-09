import React, {useState, useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function Realtorsdisplay(props) {

    const context = useContext(MortgageContext)

    const [editedRealtor, setEditedRealtor] = useState({
        date: props.r.date,
        campaign: props.r.campaign,
        status: props.r.status,
        firstName: props.r.firstName,
        lastName: props.r.lastName,
        brokerage: props.r.brokerage,
        phone: props.r.phone,
        email: props.r.email,
        numberOfContacts: props.r.numberOfContacts,
        golfer: props.r.golfer,
        lastContact: props.r.lastContact,
        notes: props.r.notes
    })
    const [isEdit, setIsEdit] = useState(false)

    const toggleEdit = () => {
        setIsEdit(prevEdit => prevEdit ? false : true
    )}
    const handleChange = (event) => {
        const {name, value} = event.target
        setEditedRealtor(prevInput => ({...prevInput, [name]: value}))
    }

    return (
        <div>
            {isEdit ? 
                <div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        toggleEdit()
                        
                        context.editRealtors(props.r._id, {date: editedRealtor.date, 
                                                        campaign: editedRealtor.campaign, 
                                                        status: editedRealtor.status,
                                                        firstName: editedRealtor.firstName,
                                                        lastName: editedRealtor.lastName,
                                                        brokerage: editedRealtor.brokerage,
                                                        phone: editedRealtor.phone,
                                                        email: editedRealtor.email,
                                                        numberOfContacts: editedRealtor.numberOfContacts,
                                                        golfer: editedRealtor.golfer,
                                                        lastContact: editedRealtor.lastContact,
                                                        notes: editedRealtor.notes
                                                        })
                    }}>
                        <input placeholder="Date" type="text" name="date" value={editedRealtor.date} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Campaign" type="text" name="campaign" onChange={handleChange} value={editedRealtor.campaign} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Status" type="text" name="status" onChange={handleChange} value={editedRealtor.status} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="First Name" type="text" name="firstName" onChange={handleChange} value={editedRealtor.firstName} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Last Name" type="text" name="lastName" onChange={handleChange} value={editedRealtor.lastName} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Brokerage" type="text" name="brokerage" value={editedRealtor.brokerage} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone (801-456-7890)" type="text" name="phone" value={editedRealtor.phone} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Email" type="text" name="email" value={editedRealtor.email} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="# of Contacts" type="text" name="numberOfContacts" value={editedRealtor.numberOfContacts} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Golfer" type="text" name="golfer" value={editedRealtor.golfer} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Last Contact" type="text" name="lastContact" value={editedRealtor.lastContact} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <input placeholder="Notes" type="text" name="notes" value={editedRealtor.notes} onChange={handleChange} style={{backgroundColor: "lightblue"}}/>
                        <button type="submit" style={{backgroundColor: "lightblue"}}>Submit</button>
                    </form>
                    <button onClick={() => toggleEdit()} style={{backgroundColor: "lightblue"}}>Cancel Edit</button>
                </div>
            :
                <tr style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightblue"}}>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "80px", 
                        maxWidth: "80px",
                        backgroundColor: "lightblue"}}>{props.r.date}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "120px", 
                        maxWidth: "120px",
                        backgroundColor: "lightblue"}}>{props.r.campaign}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "180px", 
                        maxWidth: "180px",
                        backgroundColor: "lightblue"}}>{props.r.status}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "80px", 
                        maxWidth: "80px",
                        backgroundColor: "lightblue"}}>{props.r.firstName}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "100px", 
                        maxWidth: "100px",
                        backgroundColor: "lightblue"}}>{props.r.lastName}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "100px", 
                        maxWidth: "100px",
                        backgroundColor: "lightblue"}}>{props.r.brokerage}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "100px", 
                        maxWidth: "100px",
                        backgroundColor: "lightblue"}}>{props.r.phone}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "210px", 
                        maxWidth: "210px",
                        backgroundColor: "lightblue"}}>{props.r.email}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "55px", 
                        maxWidth: "55px",
                        backgroundColor: "lightblue"}}>{props.r.numberOfContacts}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "40px", 
                        maxWidth: "40px",
                        backgroundColor: "lightblue"}}>{props.r.golfer}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "70px", 
                        maxWidth: "70px",
                        backgroundColor: "lightblue"}}>{props.r.lastContact}</td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "80px", 
                        maxWidth: "80px",
                        backgroundColor: "lightblue"}}>{props.r.notes}</td>
                        <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "40px", 
                        maxWidth: "40px",
                        backgroundColor: "lightblue"}}>
                        <button onClick={() => toggleEdit()}>Edit</button></td>
                    <td style={{
                        border: "1px solid black", 
                        padding: "5px", 
                        height: "40px",
                        width: "60px", 
                        maxWidth: "60px",
                        backgroundColor: "lightblue"}}><button onClick={() => context.deleteRealtors(props.r._id)}>Delete</button></td>
                </tr>
            }
        </div>
    )
}

export default Realtorsdisplay