import React, {useState, useEffect} from "react"
import axios from "axios"

const MortgageContext = React.createContext()

function MortgageContextProvider(props) {

    const [lead, setLead] = useState([])
    const [getLeads, setGetLeads] = useState([])

    const [realtor, setRealtor] = useState([])
    const [getRealtors, setGetRealtors] = useState([])

    const [campaignsLeads, setCampaignLeads] = useState([])
    const [getCampaignsLeads, setGetCampaignsLeads] = useState([])
    const [campaignsRealtors, setCampaignRealtors] = useState([])
    const [getCampaignsRealtors, setGetCampaignsRealtors] = useState([])

    const handleChangeLeads = (event) => {
        const {name, value} = event.target
        setLead(prevInputs => ({...prevInputs, [name]: value}))
    }
    const handleSubmitLeads = () => {
        axios.post("/leads", lead)
            .then(res => setGetLeads(prevLead => [res.data, ...prevLead]))
            .catch(err => console.log(err))
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
        setCampaignLeads(prevL => ({...prevL, [name]: value}))
        console.log(`campaigns leads: ${value}`)
    }
    const handleSubmitCampaignsLeads = () => {
        axios.post("/campaigns", campaignsLeads)
            .then(res => setGetCampaignsLeads(prevCampaignL => [res.data, ...prevCampaignL]))
            .catch(err => console.log(err))
    }
    const handleChangeCampaignsRealtors = (event) => {
        const {name, value} = event.target
        setCampaignRealtors(prevR => ({...prevR, [name]: value}))
        console.log(`campaigns realtors: ${value}`)
    }
    const handleSubmitCampaignsRealtors = () => {
        axios.post("/campaigns", campaignsRealtors)
            .then(res => setGetCampaignsRealtors(prevCampaignR => [res.data, ...prevCampaignR]))
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
    useEffect(() => {
        axios.get("/campaigns")
            .then(res => setGetCampaignsLeads(res.data))
            .catch(err => console.log(err))
    }, [campaignsLeads])
    useEffect(() => {
        axios.get("/campaigns")
            .then(res => setGetCampaignsRealtors(res.data))
            .catch(err => console.log(err))
    }, [campaignsRealtors])
    return (
        <MortgageContext.Provider value={{
            handleChangeLeads, handleSubmitLeads,
            handleChangeRealtors, handleSubmitRealtors, 
            handleChangeCampaignsLeads, handleSubmitCampaignsLeads, deleteCampaignsL, deleteCampaignsR,
            handleChangeCampaignsRealtors, handleSubmitCampaignsRealtors,
            lead,getLeads,
            realtor, getRealtors,
            campaignsLeads, getCampaignsLeads, campaignsRealtors, getCampaignsRealtors,
        }}>
            {props.children}
        </MortgageContext.Provider>
    )
}

export {MortgageContext, MortgageContextProvider}