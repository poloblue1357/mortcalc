import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function Statusdisplay(props) {

    const context = useContext(MortgageContext)

    return (
        <div style={{border: "2px black solid", padding: "5px", margin: "10px", display: "flex", justifyContent: "center", alignItems: "center", width: "200px"}}>
            <h3>{props.s1.campaign}</h3>
            <button style={{margin: "1px", height: "20px"}} onClick={() => context.deleteStatus(props.s1._id)}>Delete</button>
        </div>
    )
}

export default Statusdisplay