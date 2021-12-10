import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"
import CampaignsdisplayL from "./CampaignsdisplayL"
import CampaignsdisplayR from "./CampaignsdisplayR.js"

function Campaigns() {
    const context = useContext(MortgageContext)

    const c = context.getCampaignsLeads.map(c1 => <CampaignsdisplayL c1={c1} key={c1._id}/>)
    const d = context.getCampaignsRealtors.map(d1 => <CampaignsdisplayR d1={d1} key={d1._id}/>)
    
    return (
        <div>
            <>
                <h1>List of Campaigns (Leads)</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    context.handleSubmitCampaignsLeads()
                }}>
                    <input placeholder="New Campaign (Leads)" type="text" name="campaignsLeads" onChange={context.handleChangeCampaignsLeads} />
                    <button>Submit</button>
                </form>
                {c}
            </>
            <>
                <h1>List of Campaigns (Realtors)</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    context.handleSubmitCampaignsRealtors()
                }}>
                    <input placeholder="New Campaign (Realtors)" type="text" name="campaignsRealtors" onChange={context.handleChangeCampaignsRealtors} />
                    <button>Submit</button>
                </form>
                {d}
            </>
        </div>
    )
}

export default Campaigns