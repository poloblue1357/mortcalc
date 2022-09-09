import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import Realtorsdisplay from "./Realtorsdisplay"
import axios from "axios"

function Realtors() {
    const context = useContext(MortgageContext)

    const { userAxios } = useContext(MortgageContext)

    useEffect(() => {
        userAxios.get("/api/realtors")
            .then(res => context.setGetRealtors(res.data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        userAxios.get("/api/campaigns")
            .then(res => context.setGetCampaignsRealtors(res.data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        userAxios.get("/api/status")
            .then(res => context.setGetStatusRealtors(res.data))
            .catch(err => console.log(err))
    }, [])

    const r = context.getRealtors.map(r => <Realtorsdisplay r={r} key={r._id}/>)

    const filterC = context.getCampaignsRealtors.filter(status => status.campaignsRealtors)
    const listCampaigns = filterC.map(lead => {
        return <option key={lead.campaignsRealtors} value={lead.campaignsRealtors}>{lead.campaignsRealtors}</option>
    })
    const filterS = context.getStatusRealtors.filter(status => status.statusRealtors)
    const listStatus = filterS.map(status => {
        return <option key={status.statusRealtors} value={status.statusRealtors}>{status.statusRealtors}</option>
    })
    const sortingRealtors = context.getRealtors.sort((a, b) => {
        let fa = a.status;
        let fb = b.status;
        if(fa < fb) {
            return -1
        }
        if(fa > fb) {
            return 1
        }
        return 0
    })

    return (
        <div>
            <h1>Realtors</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                context.handleSubmitRealtors()
            }}>
                <input placeholder="Date" type="text" name="date" value={context.date} onChange={context.handleChangeRealtors}/>
                {/* <input placeholder="Campaign" type="text" name="campaign" value={context.campaign} onChange={context.handleChangeRealtors}/> */}
                <select placeholder="Campaign" type="text" name="campaign" value={context.campaign} onChange={context.handleChangeRealtors} style={{width: "160px"}}>
                    <option value="">Campaign: </option>
                    {listCampaigns}
                </select>
                {/* <placeholder="Status" type="text" name="status" value={context.status} onChange={context.handleChangeRealtors}/> */}
                <select placeholder="Status" type="text" name="status" value={context.status} onChange={context.handleChangeRealtors} style={{width: "250px"}}>
                    <option value="">Status: </option>
                    {listStatus}
                </select>
                <br />
                <br />
                <input placeholder="First Name" type="text" name="firstName" value={context.firstName} onChange={context.handleChangeRealtors}/>
                <input placeholder="Last Name" type="text" name="lastName" value={context.lastName} onChange={context.handleChangeRealtors}/>
                <input placeholder="Brokerage" type="text" name="brokerage" value={context.brokerage} onChange={context.handleChangeRealtors}/>
                <input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone (801-456-7890)" type="text" name="phone" value={context.phone} onChange={context.handleChangeRealtors}/>
                <br />
                <br />
                <input placeholder="Email" type="text" name="email" value={context.email} onChange={context.handleChangeRealtors}/>
                <input placeholder="# of Contacts" type="text" name="numberOfContacts" onChange={context.handleChangeRealtors}/>
                <input placeholder="Golfer - Yes or No" type="text" name="golfer" value={context.golfer} onChange={context.handleChangeRealtors}/>                
                <input placeholder="Last Contact" type="text" name="lastContact" value={context.lastContact} onChange={context.handleChangeRealtors}/>
                <input placeholder="Notes" type="text" name="notes" value={context.notes} onChange={context.handleChangeRealtors}/>
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
                height: "40px",
                width: "80px", 
                maxWidth: "80px"
                }}>Date</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "120px", 
                maxWidth: "120px"
                }}>Campaign</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "180px", 
                maxWidth: "180px"
                }}>Status</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "80px", 
                maxWidth: "80px"
                }}>First Name</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "100px", 
                maxWidth: "100px"
                }}>Last Name</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "100px", 
                maxWidth: "100px"
                }}>Brokerage</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                type: "phone",
                width: "100px", 
                maxWidth: "100px"
                }}>Phone</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "210px", 
                maxWidth: "210px"
                }}>Email</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "55px", 
                maxWidth: "55px"
                }}># of Contacts</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "40px", 
                maxWidth: "40px"
                }}>Golfer</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "70px", 
                maxWidth: "70px"
                }}>Last Contact</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "80px", 
                maxWidth: "80px"
                }}>Notes</td>
                    </tr>
                </tbody>
            </table>
            <table style={{borderSpacing: "0", borderCollapse: "collapse", margin: "0 auto"}}>
                <tbody>
                    {r}
                </tbody>
            </table>
        </div>
    )
}

export default Realtors