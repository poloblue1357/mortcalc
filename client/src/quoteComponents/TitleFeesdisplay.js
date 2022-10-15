import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function TitleFeesdisplay(props) {

    const context = useContext(MortgageContext)

    return (
        <div>
            <table>
                <tbody>
                    <tr style={{display: "grid"}}>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>{props.f.titleFees.closingFee}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>{props.f.titleFees.cpl}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>{props.f.titleFees.cplBorrower}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>{props.f.titleFees.endorsements}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>{props.f.titleFees.recordingServices}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>{props.f.titleFees.recording}</td>
                        <button onClick={() => context.deleteTitleFees(props.f._id)} style={{margin: "10px", backgroundColor: "black", color: "white"}}>Delete</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TitleFeesdisplay