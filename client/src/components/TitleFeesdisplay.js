import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function TitleFeesdisplay(props) {

    const context = useContext(MortgageContext)

    return (
        <div>
            <table style={{borderCollapse: "collapse"}}>
                <tbody>
                    <tr style={{display: "grid"}}>
                        <td style={{textAlign: "center", border: "solid 1px black", backgroundColor: "#c9daf8"}}>$ {props.f.closingFee}</td>
                        <td style={{textAlign: "center", border: "solid 1px black", backgroundColor: "#c9daf8"}}>$ {props.f.cpl}</td>
                        <td style={{textAlign: "center", border: "solid 1px black", backgroundColor: "#c9daf8"}}>$ {props.f.cplBorrower}</td>
                        <td style={{textAlign: "center", border: "solid 1px black", backgroundColor: "#c9daf8"}}>$ {props.f.endorsements}</td>
                        <td style={{textAlign: "center", border: "solid 1px black", backgroundColor: "#c9daf8"}}>$ {props.f.recordingServices}</td>
                        <td style={{textAlign: "center", border: "solid 1px black", backgroundColor: "#c9daf8"}}>$ {props.f.recording}</td>
                        <button onClick={() => context.deleteTitleFees(props.f._id)} style={{margin: "10px", backgroundColor: "black", color: "white"}}>Delete</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TitleFeesdisplay