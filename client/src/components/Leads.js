import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import Leadsdisplay from "./Leadsdisplay"
import axios from "axios"

function Leads() {
    const context = useContext(MortgageContext)

    const { userAxios } = useContext(MortgageContext)

    useEffect(() => {
        userAxios.get("/api/leads")
            .then(res => {
                context.setGetLeads(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        userAxios.get("/api/status")
            .then(res => context.setGetStatusLeads(res.data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        userAxios.get("/api/campaigns")
            .then(res => context.setGetCampaignsLeads(res.data))
            .catch(err => console.log(err))
    }, [])

    const l = context.getLeads.map(l => <Leadsdisplay l={l} key={l._id}/>)

    const filterC = context.getCampaignsLeads.filter(lead => lead.campaignsLeads)
    const listCampaigns = filterC.map(lead => {
        return <option key={lead.campaignsLeads} value={lead.campaignsLeads}>{lead.campaignsLeads}</option>
    })
    const filterS = context.getStatusLeads.filter(status => status.statusLeads)
    const listStatus = filterS.map(status => {
        return <option key={status.statusLeads} value={status.statusLeads}>{status.statusLeads}</option>
    })

    const sortingLeads = context.getLeads.sort((a, b) => {
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
            <h1>Leads</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                context.handleSubmitLeads()
            }}>
                <input placeholder="Date" type="text" name="date" value={context.date} onChange={context.handleChangeLeads}/>
                <select placeholder="Campaign" type="text" name="campaign" value={context.campaign} onChange={context.handleChangeLeads} style={{width: "160px"}}>
                    <option value="">Campaign: </option>
                    {listCampaigns}
                </select>
                <select placeholder="Status" type="text" name="status" value={context.status} onChange={context.handleChangeLeads} style={{width: "250px"}}>
                    <option value="">Status: </option>
                    {listStatus}
                </select>
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
                <br />
                <br />
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
                <br />
                <br />
                <input placeholder="Email" type="text" name="email" value={context.email} onChange={context.handleChangeLeads}/>
                <input placeholder="Current Rate (percent)" type="text" name="currentRate" value={context.currentRate} onChange={context.handleChangeLeads}/>
                <select id="googleReview" name="googleReview" value={context.googleReview} onChange={context.handleChangeLeads} style={{width: "150px"}}>
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
                height: "40px",
                width: "80px", 
                maxWidth: "80px"
                }}>Date</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "160px", 
                maxWidth: "160px"
                }}>Campaign</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "250px", 
                maxWidth: "250px"
                }}>Status</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "100px", 
                maxWidth: "100px"
                }}>Loan Type</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "130px", 
                maxWidth: "130px"
                }}>Loan Purpose</td>
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
                }}>Co-Borrower</td>
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
                width: "200px", 
                maxWidth: "200px"
                }}>Email</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "50px", 
                maxWidth: "50px"
                }}>Current Rate</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "80px", 
                maxWidth: "80px"
                }}>Google Review</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "50px", 
                maxWidth: "50px"
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
                    {l}
                </tbody>
            </table>
        </div>
    )
}

export default Leads

{/* <h1>Leads</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                context.handleSubmitLeads()
            }}>
                <input placeholder="Date" type="text" name="date" value={context.date} onChange={context.handleChangeLeads}/>
                <select placeholder="Campaign" type="text" name="campaign" value={context.campaign} onChange={context.handleChangeLeads} style={{width: "160px"}}>
                    <option value="">Campaign: </option>
                    {listCampaigns}
                </select>
                
                <select placeholder="Status" type="text" name="status" value={context.status} onChange={context.handleChangeLeads} style={{width: "250px"}}>
                    <option value="">Status: </option>
                    {listStatus}
                </select>
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
                <br />
                <br />
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
                <br />
                <br />
                <input placeholder="Email" type="text" name="email" value={context.email} onChange={context.handleChangeLeads}/>
                <input placeholder="Current Rate" type="text" name="currentRate" value={context.currentRate} onChange={context.handleChangeLeads}/>
                <select id="googleReview" name="googleReview" value={context.googleReview} onChange={context.handleChangeLeads} style={{width: "150px"}}>
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
                height: "40px",
                width: "80px", 
                maxWidth: "80px"
                }}>Date</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "160px", 
                maxWidth: "160px"
                }}>Campaign</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "250px", 
                maxWidth: "250px"
                }}>Status</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "100px", 
                maxWidth: "100px"
                }}>Loan Type</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "130px", 
                maxWidth: "130px"
                }}>Loan Purpose</td>
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
                }}>Co-Borrower</td>
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
                width: "200px", 
                maxWidth: "200px"
                }}>Email</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "50px", 
                maxWidth: "50px"
                }}>Current Rate</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "80px", 
                maxWidth: "80px"
                }}>Google Review</td>
                        <td style={{
                border: "1px solid black", 
                padding: "5px", 
                height: "40px",
                width: "50px", 
                maxWidth: "50px"
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
                    {l}
                </tbody>
            </table> */}