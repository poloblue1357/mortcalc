import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function TitleFeesdisplay(props) {

    const context = useContext(MortgageContext)

    return (
        <div>
            <table>
                <tbody>
                    <tr style={{display: "grid"}}>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.closingFee}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.cpl}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.cplBorrower}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.endorsements}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.recordingServices}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.recording}</td>
                        <button onClick={() => context.deleteTitleFees(props.f.titleFees._id)} style={{margin: "10px", backgroundColor: "black", color: "white"}}>Delete</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TitleFeesdisplay