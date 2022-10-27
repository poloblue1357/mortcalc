import React, {useContext, useEffect, useState} from "react"
import {MortgageContext} from "../ContextProvider"
import FeeSetupdisplay from "./FeeSetupdisplay"
import TitleFeesdisplay from './TitleFeesdisplay'

function FeeSetup() {

    const {disable, setDisable} = useState(true)

    const context = useContext(MortgageContext)
    const {setGetFeeSetupData, handleChangeFeeSetup, userAxios, handleSubmitFeeSetup} = useContext(MortgageContext)
    const {handleChangeTitleFees, handleSubmitTitleFees, setGetTitleFeesData} = useContext(MortgageContext)

    // const y = Object.entries(context?.getFeeSetupData?.feeSetup)
    // const z = Object.entries(context?.getTitleFeesData?.titleFees)

    const c = context?.getFeeSetupData?.filter(item => item.titleFees ? null : item)
    const d = context?.getFeeSetupData?.filter(item => item.titleFees && item)

    const a = c?.map(f => <FeeSetupdisplay f={f} key={f._id}/>)
    const b = d?.map(f => <TitleFeesdisplay f={f} key={f._id}/>)

    useEffect(() => {
        userAxios.get("/api/feesetup")
            .then(res => {
                // console.log("feesetup response", res.data)
                setGetFeeSetupData(res.data)
                // setGetTitleFeesData(res.data)
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
                    event.preventDefault()
                    handleSubmitFeeSetup()
                   event.target.reset()
                }}>
                 {/* res.data[0].titleFees.closingFee */}
                    <input placeholder="Fee Scenario" name="feeScenario" value={context.feeScenario} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Origination" name="origination" value={context.origination} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Underwriting" name="underwriting" value={context.underwriting} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Tax Service" name="taxService" value={context.taxService} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Credit Report" name="creditReport" value={context.creditReport} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Flood Certificate" name="floodCertificate" value={context.floodCertificate} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Appraisal" name="appraisal" value={context.appraisal} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Pest Inspection" name="pestInspection" value={context.pestInspection} onChange={handleChangeFeeSetup}/>
                    <button  disabled={disable} style={{margin: "8px", backgroundColor: "black", color: "white"}}>Submit</button>
                </form>
                <h3 style={{ textOrientation: "upright", fontSize: "25px", padding: "10px"}}>Fee <br /> Type</h3>
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                        <tr style={{display: "grid"}}>
                            <td style={{border: "solid 1px black", backgroundColor: "#334960", color: "white"}}>Fee Scenario</td>
                            <td style={{border: "solid 1px black"}}>Origination</td>
                            <td style={{border: "solid 1px black"}}>Underwriting</td>
                            <td style={{border: "solid 1px black"}}>Tax Service</td>
                            <td style={{border: "solid 1px black"}}>Credit Report</td>
                            <td style={{border: "solid 1px black"}}>Flood Certificate</td>
                            <td style={{border: "solid 1px black"}}>Appraisal</td>
                            <td style={{border: "solid 1px black"}}>Pest Inspection</td>
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
                    handleSubmitFeeSetup()
                    event.target.reset()
                }}>
                    <input placeholder="Closing Fee" name="closingFee" value={context.closingFee} onChange={handleChangeFeeSetup}/>
                    <input placeholder="CPL" name="cpl" value={context.cpl} onChange={handleChangeFeeSetup}/>
                    <input placeholder="CPL Borrower" name="cplBorrower" value={context.cplBorrower} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Endorsements" name="endorsements" value={context.endorsements} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Recording Services" name="recordingServices" value={context.recordingServices} onChange={handleChangeFeeSetup}/>
                    <input placeholder="Recording" name="recording" value={context.recording} onChange={handleChangeFeeSetup}/>
                    <button type="submit" style={{margin: "8px", backgroundColor: "black", color: "white"}}>Submit</button>
                </form>
                <h3 style={{ textOrientation: "upright", fontSize: "25px", padding: "10px"}}>Title <br /> Fees</h3>
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                        <tr style={{display: "grid"}}>
                            <td style={{border: "solid 1px black"}}>Closing Fees</td>
                            <td style={{border: "solid 1px black"}}>CPL</td>
                            <td style={{border: "solid 1px black"}}>CPL Borrower</td>
                            <td style={{border: "solid 1px black"}}>Endorsements</td>
                            <td style={{border: "solid 1px black"}}>Recording Services</td>
                            <td style={{border: "solid 1px black"}}>Recording</td>
                        </tr>
                    </tbody>
                </table>
                {b}
            </div>
        </div>
    )
}

export default FeeSetup