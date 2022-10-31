import React, {useEffect, useState} from "react"


function QuickDTI() {

    const initInputs = {input1: "", input2: "", input3: "", input4: "", input5: 1500}
    const [inputs, setInputs] = useState(initInputs)
    const [getInputs, setGetInputs] = useState([])

    const handleChangeDTI = (event) => {
        const {name, value} = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    const handleSubmitDTI = () => {
        setGetInputs([inputs])
        alert("Changes Saved")
    }
    const d3 = Math.round((inputs.input3 / 12) * 100) / 100
    const d5 = Math.round((d3 + inputs.input5) * 100) / 100
    const e5 = d5

    return (
        <div>
            <h1>Quick DTI</h1>
            <form onSubmit={event => {
                event.preventDefault()
                handleSubmitDTI()    
            }}>
                <table style={{backgroundColor: "#c9daf8", borderCollapse: "collapse"}}>
                    <tbody>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                <input
                                    placeholder="Input 3"
                                    style={{backgroundColor: "#c9daf8"}}
                                    name="input3"
                                    value={inputs.input3}
                                    onChange={handleChangeDTI}
                                />
                            </td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                <input 
                                    placeholder="Input 4"
                                    style={{backgroundColor: "#c9daf8"}}
                                    name="input4"
                                    value={inputs.input4}
                                    onChange={handleChangeDTI}
                                />
                            </td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>${d3}</td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                <input 
                                    placeholder="$1500" 
                                    style={{backgroundColor: "#c9daf8"}}
                                    name="input5"
                                    value={inputs.input5}
                                    onChange={handleChangeDTI}
                                />
                            </td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                <input 
                                    placeholder="Input 1"
                                    style={{backgroundColor: "#c9daf8"}}
                                    name="input1"
                                    value={inputs.input1}
                                    onChange={handleChangeDTI}
                                />
                            </td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>${d5}</td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>${e5}</td>
                        </tr>
                        <tr>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}>
                                <input 
                                    placeholder="Input 2"
                                    style={{backgroundColor: "#c9daf8"}}
                                    name="input2"
                                    value={inputs.input2}
                                    onChange={handleChangeDTI}
                                />
                            </td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                        </tr>
                    </tbody>
                </table>
                {/* <button type="submit" style={{backgroundColor: "#c9daf8", margin: "5px", padding: "5px"}}>Submit Changes</button> */}
            </form>
        </div>
    )
}

export default QuickDTI