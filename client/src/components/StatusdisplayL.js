import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function StatusdisplayL(props) {

    const context = useContext(MortgageContext)

    return (
        <div style={{border: "2px black solid", padding: "5px", margin: "10px", display: "flex", justifyContent: "center", alignItems: "center", width: "200px"}}>
            <h3>{props.c1.statusLeads}</h3>
            <button style={{margin: "1px", height: "20px"}} onClick={() => context.deleteStatusL(props.c1._id)}>Delete</button>
            {/* <h3>{props.d1.campaignsRealtors}</h3>
            <button style={{margin: "1px", height: "20px"}} onClick={() => context.deleteCampaigns(props.d1._id)}>Delete</button> */}
        </div>
    )
}

export default StatusdisplayL