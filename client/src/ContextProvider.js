import React, {useState} from "react"
import axios from "axios"

const MortgageContext = React.createContext()

function MortgageContextProvider(props) {

    const initInputs = {
        date: "",
        campaign: "",
        status: "",
        loanType: "",
        loanPurpose: "",
        firstName: "",
        lastName: "",
        coBorrower: "",
        phone: "",
        email: "",
        currentRate: "",
        googleReview: "",
        lastContact: "",
        notes: ""
    }

    const [lead, setLead] = useState(initInputs)
    const [getLeads, setGetLeads] = useState([])

    const [realtor, setRealtor] = useState([])
    const [getRealtors, setGetRealtors] = useState([])   

    const [campaignsLeads, setCampaignLeads] = useState()
    const [getCampaignsLeads, setGetCampaignsLeads] = useState([])
    const [campaignsRealtors, setCampaignRealtors] = useState()
    const [getCampaignsRealtors, setGetCampaignsRealtors] = useState([])

    const [statusLeads, setStatusLeads] = useState()
    const [getStatusLeads, setGetStatusLeads] = useState([])
    const [statusRealtors, setStatusRealtors] = useState()
    const [getStatusRealtors, setGetStatusRealtors] = useState([])

    const handleChangeLeads = (event) => {
        const {name, value} = event.target
        setLead(prevLead => ({...prevLead, [name]: value}))
    }
    const handleSubmitLeads = () => {
        axios.post("/leads", lead)
            .then(res => {
                setGetLeads(prevLead => [res.data, ...prevLead])
                setLead(initInputs)
            })
            .catch(err => console.log(err))
    }
    const deleteLeads = (leadsId) => {
        axios.delete(`http://localhost:7000/leads/${leadsId}`)
            .then(res => {
                let filterLeads = getLeads.filter(getLead => getLead._id !== leadsId)
                setGetLeads(filterLeads)
            })
            .catch(err => console.log(err))
    }
    const editLeads = (_id, editedLead) => {
        axios.put(`https://localhost:7000/leads/${_id}`, editedLead)
            .then(res => {
                setGetLeads(prevLead => {
                    let arrayOfLeads = prevLead.getLeads.map(lead => lead._id === _id ? res.data : lead)
                    return {arrayOfLeads}
                })
            })
    }
    const handleChangeRealtors = (event) => {
        const {name, value} = event.target
        setRealtor(prevRealtors => ({...prevRealtors, [name]: value}))
    }
    const handleSubmitRealtors = () => {
        axios.post("/realtors", realtor)
            .then(res => setGetRealtors(prevRealtor => [...prevRealtor, res.data]))
            .catch(err => console.log(err))
    }
    const handleChangeCampaignsLeads = (event) => {
        const {name, value} = event.target
        setCampaignLeads(value)
    }
    const handleSubmitCampaignsLeads = () => {
        axios.post("/campaigns", {campaignsLeads})
            .then(res => {
                setGetCampaignsLeads(prevCampaignL => [res.data, ...prevCampaignL])
                setCampaignLeads('')
            })
            .catch(err => console.log(err))
    }
    const handleChangeCampaignsRealtors = (event) => {
        const {name, value} = event.target
        setCampaignRealtors(value)
    }
    const handleSubmitCampaignsRealtors = () => {
        axios.post("/campaigns", {campaignsRealtors})
            .then(res => {
                setGetCampaignsRealtors(prevCampaignR => [res.data, ...prevCampaignR])
                setCampaignRealtors('')
            })
            .catch(err => console.log(err))
    }
    const deleteCampaignsL = (campaignId) => {
        axios.delete(`http://localhost:7000/campaigns/${campaignId}`)
            .then(res => {
                let filterCampaigns = getCampaignsLeads.filter(getCampaign => getCampaign._id !== campaignId)
                setGetCampaignsLeads(filterCampaigns)
            })
            .catch(err => console.log(err))
    }
    const deleteCampaignsR = (campaignId) => {
        axios.delete(`http://localhost:7000/campaigns/${campaignId}`)
            .then(res => {
                let filterCampaigns = getCampaignsRealtors.filter(getCampaign => getCampaign._id !== campaignId)
                setGetCampaignsRealtors(filterCampaigns)
            })
            .catch(err => console.log(err))
    }

    const handleChangeStatusLeads = (event) => {
        const {name, value} = event.target
        setStatusLeads(value)
    }
    const handleSubmitStatusLeads = () => {
        axios.post("/status", {statusLeads})
            .then(res => {
                setGetStatusLeads(prevStatusL => [res.data, ...prevStatusL])
                setStatusLeads('')
            })
            .catch(err => console.log(err))
    }
    const handleChangeStatusRealtors = (event) => {
        const {name, value} = event.target
        setStatusRealtors(value)
    }
    const handleSubmitStatusRealtors = () => {
        axios.post("/status", {statusRealtors})
            .then(res => {
                setGetStatusRealtors(prevStatusR => [res.data, ...prevStatusR])
                setStatusRealtors('')
            })
            .catch(err => console.log(err))
    }
    const deleteStatusL = (statusId) => {
        axios.delete(`http://localhost:7000/status/${statusId}`)
            .then(res => {
                let filterStatus = getStatusLeads.filter(getStatus => getStatus._id !== statusId)
                setGetStatusLeads(filterStatus)
            })
            .catch(err => console.log(err))
    }
    const deleteStatusR = (statusId) => {
        axios.delete(`http://localhost:7000/status/${statusId}`)
            .then(res => {
                let filterStatus = getStatusRealtors.filter(getStatus => getStatus._id !== statusId)
                setGetStatusRealtors(filterStatus)
            })
            .catch(err => console.log(err))
    }

    return (
        <MortgageContext.Provider value={{
            handleChangeLeads, handleSubmitLeads, deleteLeads, editLeads,
            handleChangeRealtors, handleSubmitRealtors, 
            handleChangeCampaignsLeads, handleSubmitCampaignsLeads, deleteCampaignsL, deleteCampaignsR,
            handleChangeCampaignsRealtors, handleSubmitCampaignsRealtors,
            lead,getLeads, setGetLeads,
            realtor, getRealtors, setGetRealtors,
            campaignsLeads, getCampaignsLeads, campaignsRealtors, getCampaignsRealtors,
            setGetCampaignsLeads, setGetCampaignsRealtors,
            handleChangeStatusLeads, handleSubmitStatusLeads, deleteStatusL,
            handleChangeStatusRealtors, handleSubmitStatusRealtors, deleteStatusR,
            statusLeads, getStatusLeads, statusRealtors, getStatusRealtors,
            setGetStatusLeads, setGetStatusRealtors,
        }}>
            {props.children}
        </MortgageContext.Provider>
    )
}

export {MortgageContext, MortgageContextProvider}