import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function StatusdisplayR(props) {

    const context = useContext(MortgageContext)

    return (
        <div style={{border: "2px black solid", padding: "5px", margin: "10px", display: "flex", justifyContent: "center", alignItems: "center", width: "200px"}}>
            {/* <h3>{props.c1.campaignsLeads}</h3>
            <button style={{margin: "1px", height: "20px"}} onClick={() => context.deleteCampaigns(props.c1._id)}>Delete</button> */}
            <h3>{props.d1.statusRealtors}</h3>
            <button style={{margin: "1px", height: "20px"}} onClick={() => context.deleteStatusR(props.d1._id)}>Delete</button>
        </div>
    )
}

export default StatusdisplayR