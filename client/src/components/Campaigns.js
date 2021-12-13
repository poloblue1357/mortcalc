import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import CampaignsdisplayL from "./CampaignsdisplayL"
import CampaignsdisplayR from "./CampaignsdisplayR.js"
import axios from 'axios'

function Campaigns() {
    const {setGetCampaignsRealtors, setGetCampaignsLeads, getCampaignsLeads, getCampaignsRealtors, handleSubmitCampaignsLeads, handleSubmitCampaignsRealtors, handleChangeCampaignsLeads, handleChangeCampaignsRealtors} = useContext(MortgageContext)

    const a = getCampaignsLeads.filter(lead => lead.campaignsLeads && lead)
    const b = getCampaignsRealtors.filter(lead => lead.campaignsRealtors && lead)

    const c = a.map(c1 => <CampaignsdisplayL c1={c1} key={c1._id}/>)
    const d = b.map(d1 => <CampaignsdisplayR d1={d1} key={d1._id}/>)

    useEffect(() => {
        axios.get("/campaigns")
            .then(res => setGetCampaignsRealtors(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("/campaigns")
            .then(res => setGetCampaignsLeads(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <>
                <h1>List of Campaigns (Leads)</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmitCampaignsLeads()
                }}>
                    <input placeholder="New Campaign (Leads)" type="text" name="campaignsLeads" onChange={handleChangeCampaignsLeads} />
                    <button>Submit</button>
                </form>
                {c}
            </>
            <>
                <h1>List of Campaigns (Realtors)</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmitCampaignsRealtors()
                }}>
                    <input placeholder="New Campaign (Realtors)" type="text" name="campaignsRealtors" onChange={handleChangeCampaignsRealtors} />
                    <button>Submit</button>
                </form>
                {d}
            </>
        </div>
    )
}

export default Campaigns