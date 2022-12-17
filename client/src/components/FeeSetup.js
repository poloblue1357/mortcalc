import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"
import FeeSetupdisplay from "./FeeSetupdisplay"
import TitleFeesdisplay from './TitleFeesdisplay'

function FeeSetup() {

    const {disable, setDisable} = useState(true)

    const context = useContext(MortgageContext)
    const {setGetFeeSetupData, handleChangeFeeSetup, userAxios, handleSubmitFeeSetup, getFeeSetupData} = useContext(MortgageContext)
    const {handleChangeTitleFees, handleSubmitTitleFees, setGetTitleFeesData, getTitleFeesData} = useContext(MortgageContext)

    const c = context?.getFeeSetupData?.filter(item => item.titleFees ? null : item)
    const d = context?.getTitleFeesData?.filter(item => item && item)

    const a = c?.map(f => <FeeSetupdisplay f={f} key={f._id}/>)
    const b = d?.map(f => <TitleFeesdisplay f={f} key={f._id}/>)

    useEffect(() => {
        userAxios.get("/api/feesetup")
            .then(res => {
                setGetFeeSetupData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        userAxios.get("/api/titlefees")
            .then(res => {
                setGetTitleFeesData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}>Fee Setup</h1>
            <span>
                <h3>Add Fee Scenario</h3>
            </span>
            <div style={{display: "flex"}}>
                <form style={{display: "grid"}} onSubmit={(event) => {
                    {/* event.preventDefault() */}
                    handleSubmitFeeSetup()
                    event.target.reset()
                }}>
                    <input placeholder="Fee Scenario" name="feeScenario" value={context.feeScenario} onChange={handleChangeFeeSetup} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Origination" name="origination" value={context.origination} onChange={handleChangeFeeSetup} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Underwriting" name="underwriting" value={context.underwriting} onChange={handleChangeFeeSetup} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Tax Service" name="taxService" value={context.taxService} onChange={handleChangeFeeSetup} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Credit Report" name="creditReport" value={context.creditReport} onChange={handleChangeFeeSetup} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Flood Certificate" name="flood" value={context.flood} onChange={handleChangeFeeSetup} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Appraisal" name="appraisal" value={context.appraisal} onChange={handleChangeFeeSetup} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Pest Inspection" name="pestInspection" value={context.pestInspection} onChange={handleChangeFeeSetup} style={{backgroundColor: "#d9ead3"}}/>
                    <button type="submit" style={{margin: "8px", backgroundColor: "black", color: "white"}}>Submit</button>
                </form>
                <h3 style={{ textOrientation: "upright", fontSize: "25px", padding: "10px"}}>Fee <br /> Type</h3>
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                        <tr style={{display: "grid"}}>
                            <td style={{border: "solid 1px black", backgroundColor: "#334960", color: "white"}}>Fee Scenario</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Origination</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Underwriting</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Tax Service</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Credit Report</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Flood Certificate</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Appraisal</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Pest Inspection</td>
                        </tr>
                    </tbody>
                </table>
                {a}
            </div>
            <hr />
            <span>
                <h3> Add Title Fees</h3>
            </span>
            <div style={{display: "flex"}}>
                <form style={{display: "grid"}} onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmitTitleFees()
                    event.target.reset()
                }}>
                    <input placeholder="Closing Fee" name="closingFee" value={context.closingFee} onChange={handleChangeTitleFees} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="CPL" name="cpl" value={context.cpl} onChange={handleChangeTitleFees} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="CPL Borrower" name="cplBorrower" value={context.cplBorrower} onChange={handleChangeTitleFees} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Endorsements" name="endorsements" value={context.endorsements} onChange={handleChangeTitleFees} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Recording Services" name="recordingServices" value={context.recordingServices} onChange={handleChangeTitleFees} style={{backgroundColor: "#d9ead3"}}/>
                    <input placeholder="Recording" name="recording" value={context.recording} onChange={handleChangeTitleFees} style={{backgroundColor: "#d9ead3"}}/>
                    <button type="submit" style={{margin: "8px", backgroundColor: "black", color: "white"}}>Submit</button>
                </form>
                <h3 style={{ textOrientation: "upright", fontSize: "25px", padding: "10px"}}>Title <br /> Fees</h3>
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                        <tr style={{display: "grid"}}>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Closing Fees</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>CPL</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>CPL Borrower</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Endorsements</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Recording Services</td>
                            <td style={{border: "solid 1px black", backgroundColor: "#c9daf8"}}>Recording</td>
                        </tr>
                    </tbody>
                </table>
                {b}
            </div>
        </div>
    )
}

export default FeeSetup