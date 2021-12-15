import React, {useState} from "react"
import axios from "axios"

const MortgageContext = React.createContext()

function MortgageContextProvider(props) {

    const initInputsLeads = {
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
    const initInputsRealtors = {
        date: '',
        campaign: '',
        status: '',
        firstName: '',
        lastName: '',
        brokerage: '',
        phone: '',
        email: '',
        numberOfContacts: '',
        golfer: '',
        lastContact: '',
        notes: '',
    }

    const [lead, setLead] = useState(initInputsLeads)
    const [getLeads, setGetLeads] = useState([])

    const [realtor, setRealtor] = useState(initInputsRealtors)
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
                setLead(initInputsLeads)
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
        axios.put(`http://localhost:7000/leads/${_id}`, editedLead)
            .then(res => {
                setGetLeads(prevLead1 => {
                    let getLeads1 = prevLead1.map(lead1 => lead1._id === _id ? res.data : lead1)
                    console.log(getLeads1)
                    return getLeads1
                })
            })
    }
    const handleChangeRealtors = (event) => {
        const {name, value} = event.target
        setRealtor(prevRealtor => ({...prevRealtor, [name]: value}))
    }
    const handleSubmitRealtors = () => {
        axios.post("/realtors", realtor)
            .then(res => {
                setGetRealtors(prevRealtor => [res.data, ...prevRealtor])
                setRealtor(initInputsRealtors)
            })
            .catch(err => console.log(err))
    }
    const deleteRealtors = (realtorsId) => {
        axios.delete(`http://localhost:7000/realtors/${realtorsId}`)
            .then(res => {
                let filterRealtors = getRealtors.filter(getRealtor => getRealtor._id !== realtorsId)
                setGetRealtors(filterRealtors)
            })
            .catch(err => console.log(err))
    }
    const editRealtors = (_id, editedRealtor) => {
        axios.put(`http://localhost:7000/realtors/${_id}`, editedRealtor)
            .then(res => {
                setGetRealtors(prevRealtor1 => {
                    let getRealtors1 = prevRealtor1.getLeads.map(realtor1 => realtor1._id === _id ? res.data : realtor1)
                    console.log(getRealtors1)
                    return {getRealtors1}
                })
            })
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
            handleChangeRealtors, handleSubmitRealtors, deleteRealtors, editRealtors, 
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