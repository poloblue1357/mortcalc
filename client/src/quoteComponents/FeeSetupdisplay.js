import React, {useContext} from "react"
import {MortgageContext} from "../ContextProvider"

function FeeSetupdisplay(props) {

    const context = useContext(MortgageContext)

    return (
        <div>
            <table>
                <tbody>
                    <tr style={{display: "grid"}}>
                        <td style={{textAlign: "center", border: "solid 1px black", backgroundColor: "navy", color: "white"}}>{props.f.feeScenario}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>{props.f.origination}%</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.underwriting}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.taxService}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.creditReport}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.floodCertificate}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.appraisal}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.f.pestInspection}</td>
                        <button onClick={() => context.deleteFeeSetup(props.f._id)} style={{margin: "10px", backgroundColor: "black", color: "white"}}>Delete</button>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.g.closingFee}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.g.cpl}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.g.cplBorrower}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.g.endorsements}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.g.recordingServices}</td>
                        <td style={{textAlign: "center", border: "solid 1px black"}}>${props.g.recording}</td>
                        <button onClick={() => context.deleteTitleFees(props.g._id)}>Delete</button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FeeSetupdisplay