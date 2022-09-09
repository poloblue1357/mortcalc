import React, {useContext, useEffect} from "react"
import {MortgageContext} from "../ContextProvider"
import StatusdisplayL from "./StatusdisplayL"
import StatusdisplayR from "./StatusdisplayR.js"

function Status() {
    const {userAxios, statusLeads, statusRealtors, setGetStatusRealtors, setGetStatusLeads, getStatusLeads, getStatusRealtors, handleSubmitStatusLeads, handleSubmitStatusRealtors, handleChangeStatusLeads, handleChangeStatusRealtors} = useContext(MortgageContext)

    const a = getStatusLeads.filter(status => status.statusLeads && status)
    const b = getStatusRealtors.filter(status => status.statusRealtors && status)

    const c = a.map(c1 => <StatusdisplayL c1={c1} key={c1._id}/>)
    const d = b.map(d1 => <StatusdisplayR d1={d1} key={d1._id}/>)

    useEffect(() => {
        userAxios.get("/api/status")
            .then(res => setGetStatusRealtors(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        userAxios.get("/api/status")
            .then(res => setGetStatusLeads(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <>
                <h1>List of Status (Leads)</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmitStatusLeads()
                }}>
                    <input placeholder="New Status (Leads)" type="text" name="statusLeads" value={statusLeads} onChange={handleChangeStatusLeads} />
                    <button>Submit</button>
                </form>
                {c}
            </>
            <>
                <h1>List of Status (Realtors)</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmitStatusRealtors()
                }}>
                    <input placeholder="New Status (Realtors)" type="text" name="statusRealtors" value={statusRealtors} onChange={handleChangeStatusRealtors} />
                    <button>Submit</button>
                </form>
                {d}
            </>
        </div>
    )
}

export default Status