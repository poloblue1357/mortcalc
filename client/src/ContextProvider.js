import React, {useState} from "react"
import axios from "axios"

const MortgageContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function MortgageContextProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || '',
        errMsg: ''
    }
    const [userState, setUserState] = useState(initState)

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
        notes: ''
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

    function signup(credentials) {
        axios.post("/auth/signup", credentials) 
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    function login(credentials) {
        axios.post("/auth/login", credentials) 
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: '',
        })
    }
    function handleAuthErr(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }
    function resetAuthErr() {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    const handleChangeLeads = (event) => {
        const {name, value} = event.target
        setLead(prevLead => ({...prevLead, [name]: value}))
    }
    const handleSubmitLeads = () => {
        userAxios.post("/api/leads", lead)
            .then(res => {
                setGetLeads(prevLead => [res.data, ...prevLead])
                setLead(initInputsLeads)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteLeads(leadsId) {
        userAxios.delete(`/api/leads/${leadsId}`)
            .then(res => {
                let filterLeads = getLeads?.filter(getLead => getLead._id !== leadsId)
                setGetLeads(filterLeads)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function editLeads(_id, editedLead) {
        userAxios.put(`/api/leads/${_id}`, editedLead)
            .then(res => {
                setGetLeads(prevLead1 => {
                    let getLeads1 = prevLead1.map(lead1 => lead1._id === _id ? res.data : lead1)
                    // console.log(getLeads1)
                    return getLeads1
                })
            })
    }

    const handleChangeRealtors = (event) => {
        const {name, value} = event.target
        setRealtor(prevRealtor => ({...prevRealtor, [name]: value}))
    }
    const handleSubmitRealtors = () => {
        userAxios.post("/api/realtors", realtor)
            .then(res => {
                setGetRealtors(prevRealtor => [res.data, ...prevRealtor])
                setRealtor(initInputsRealtors)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteRealtors(realtorsId) {
        userAxios.delete(`/api/realtors/${realtorsId}`)
            .then(res => {
                let filterRealtors = getRealtors?.filter(getRealtor => getRealtor._id !== realtorsId)
                setGetRealtors(filterRealtors)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function editRealtors(_id, editedRealtor) {
        userAxios.put(`/api/realtors/${_id}`, editedRealtor)
            .then(res => {
                setGetRealtors(prevRealtor1 => {
                    let getRealtors1 = prevRealtor1.map(realtor1 => realtor1._id === _id ? res.data : realtor1)
                    // console.log(getRealtors1)
                    return getRealtors1
                })
            })
    }

    const handleChangeCampaignsLeads = (event) => {
        const {name, value} = event.target
        setCampaignLeads(value)
    }
    const handleSubmitCampaignsLeads = () => {
        userAxios.post("/api/campaigns", {campaignsLeads})
            .then(res => {
                setGetCampaignsLeads(prevCampaignL => [res.data, ...prevCampaignL])
                setCampaignLeads('')
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    const handleChangeCampaignsRealtors = (event) => {
        const {name, value} = event.target
        setCampaignRealtors(value)
    }
    const handleSubmitCampaignsRealtors = () => {
        userAxios.post("/api/campaigns", {campaignsRealtors})
            .then(res => {
                setGetCampaignsRealtors(prevCampaignR => [res.data, ...prevCampaignR])
                setCampaignRealtors('')
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteCampaignsL(campaignId) {
        userAxios.delete(`/api/campaigns/${campaignId}`)
            .then(res => {
                let filterCampaigns = getCampaignsLeads.filter(getCampaign => getCampaign._id !== campaignId)
                setGetCampaignsLeads(filterCampaigns)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteCampaignsR(campaignId) {
        userAxios.delete(`/api/campaigns/${campaignId}`)
            .then(res => {
                let filterCampaigns = getCampaignsRealtors.filter(getCampaign => getCampaign._id !== campaignId)
                setGetCampaignsRealtors(filterCampaigns)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const handleChangeStatusLeads = (event) => {
        const {name, value} = event.target
        setStatusLeads(value)
    }
    const handleSubmitStatusLeads = () => {
        userAxios.post("/api/status", {statusLeads})
            .then(res => {
                setGetStatusLeads(prevStatusL => [res.data, ...prevStatusL])
                setStatusLeads('')
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    const handleChangeStatusRealtors = (event) => {
        const {name, value} = event.target
        setStatusRealtors(value)
    }
    const handleSubmitStatusRealtors = () => {
        userAxios.post("/api/status", {statusRealtors})
            .then(res => {
                setGetStatusRealtors(prevStatusR => [res.data, ...prevStatusR])
                setStatusRealtors('')
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteStatusL(statusId) {
        userAxios.delete(`/api/status/${statusId}`)
            .then(res => {
                let filterStatus = getStatusLeads.filter(getStatus => getStatus._id !== statusId)
                setGetStatusLeads(filterStatus)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    const deleteStatusR = (statusId) => {
        userAxios.delete(`/api/status/${statusId}`)
            .then(res => {
                let filterStatus = getStatusRealtors.filter(getStatus => getStatus._id !== statusId)
                setGetStatusRealtors(filterStatus)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
///////////  quoteComponents ////////////////////////////////////////////////////////

    const initLpsData = {loanAmount: '', purchases: "", refinance: ""}
    const [lpsData, setLpsData] = useState(initLpsData)
    const [getLpsData, setGetLpsData] = useState([])

    const handleChangeLPS = (event) => {
        const {name, value} = event.target
        const a = value.toLocaleString()
        setLpsData(prevInfo => ({...prevInfo, [name]: a}))
    }
    const handleSubmitLPS = () => {
        userAxios.post("/api/lps", lpsData)
            .then(res => {
                setGetLpsData(prevInfo => [...prevInfo, res.data])
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteLPS(lpsId) {
        userAxios.delete(`/api/lps/${lpsId}`)
            .then(res => {
                let filterLPS = getLpsData.filter(item => item._id !== lpsId)
                setGetLpsData(filterLPS)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const initFeeSetup = {feeScenario: "", origination: "", underwriting: "", taxService: "", creditReport: "", floodCertificate: "", appraisal: "", pestInspection: ""}
    const [feeSetupData, setFeeSetupData] = useState()
    const [getFeeSetupData, setGetFeeSetupData] = useState([])

    const handleChangeFeeSetup = (event) => {
        const {name, value} = event.target
        setFeeSetupData(prevInfo => ({
            ...prevInfo, [name]: value
        }))
    }
    const handleSubmitFeeSetup = () => {
        userAxios.post("/api/feesetup", feeSetupData)
            .then(res => {
                setGetFeeSetupData(prevInfo =>  [...prevInfo, res.data])
                setFeeSetupData('')
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteFeeSetup(feeSetupId) {
        userAxios.delete(`/api/feesetup/${feeSetupId}`)
            .then(res => {
                let filterFeeSetup = getFeeSetupData.filter(feeSetup => feeSetup._id !== feeSetupId)
                setGetFeeSetupData(filterFeeSetup)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    const initTitleFees = {closingFee: "", cpl: "", cplBorrower: "", endorsements: "", recordingServices: "", recording: ""}
    const [titleFeesData, setTitleFeesData] = useState()
    const [getTitleFeesData, setGetTitleFeesData] = useState([])

    // const handleChangeTitleFees = (event) => {
    //     const {name, value} = event.target
    //     setTitleFeesData(prevInfo => ({
    //         ...prevInfo,
    //         titleFees: {
    //             ...prevInfo,
    //             [name]: value}}))
    // }
    // const handleChangeTitleFees = (event) => {
    //     const {name, value} = event.target
    //     setTitleFeesData(prevInfo => ({
    //         ...prevInfo,
    //         titleFees: {
    //             ...prevInfo.titleFees,
    //             [name]: value
    //         }
    //     }))
    // }
const handleChangeTitleFees = (event) => {
    const {name, value} = event.target
    setTitleFeesData(prevInfo => ({
        ...prevInfo,
        [name]: value 
    }))
}

    // const handleChangeTitleFees = (event) => {
    //     const {name, value} = event.target
    //     setTitleFeesData(prevInfo => ({
    //         ...prevInfo, [name]: value
    //     }))
    // }
    const handleSubmitTitleFees = () => {
        userAxios.post("/api/feesetup", feeSetupData)
            .then(res => {
                setGetTitleFeesData(prevInfo => [...prevInfo, res.data])
                setTitleFeesData('')
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteTitleFees(titleFeesId) {
        userAxios.delete(`/api/feesetup/${titleFeesId}`)
            .then(res => {
                let filterTitleFees = getTitleFeesData.filter(titleFees => titleFees._id !== titleFeesId)
                setGetTitleFeesData(filterTitleFees)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const [loanInput, setLoanInput] = useState()
    const [getLoanInput, setGetLoanInput] = useState([])

    const handleChangeLoanInput = (event) => {
        const {name, value} = event.target
        setLoanInput(prevLoanInput => ({...prevLoanInput, [name]: value}))
    }
    const handleSubmitLoanInput = () => {
        userAxios.post("/api/loaninput", loanInput)
            .then(res => {
                setGetLoanInput(prevLoanInput => [res.data, ...prevLoanInput])
                // setRealtor(initInputsRealtors)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function deleteLoanInput(loanInputId) {
        userAxios.delete(`/api/loaninput/${loanInputId}`)
            .then(res => {
                let filterLoanInput = getLoanInput?.filter(getLoanInput => getLoanInput._id !== loanInputId)
                setGetLoanInput(filterLoanInput)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function editLoanInput(_id, editedLoanInput) {
        userAxios.put(`/api/loaninput/${_id}`, editedLoanInput)
            .then(res => {
                setGetLoanInput(prevLoanInput1 => {
                    let getLoanInput1 = prevLoanInput1.map(loanInput1 => loanInput1._id === _id ? res.data : loanInput1)
                    // console.log(getRealtors1)
                    return getLoanInput1
                })
            })
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
            ...userState, signup, login, logout, handleAuthErr, resetAuthErr, userAxios,
            handleChangeLPS, handleSubmitLPS, deleteLPS, lpsData, setLpsData, getLpsData, setGetLpsData,
            handleChangeFeeSetup, handleSubmitFeeSetup, deleteFeeSetup, feeSetupData, setFeeSetupData, getFeeSetupData, setGetFeeSetupData,
            handleChangeTitleFees, handleSubmitTitleFees, deleteTitleFees, titleFeesData, setTitleFeesData, getTitleFeesData, setGetTitleFeesData,
            loanInput, setLoanInput, getLoanInput, setGetLoanInput, handleChangeLoanInput, handleSubmitLoanInput, deleteLoanInput, editLoanInput 
        }}>
            {props.children}
        </MortgageContext.Provider>
    )
}

export {MortgageContext, MortgageContextProvider}


