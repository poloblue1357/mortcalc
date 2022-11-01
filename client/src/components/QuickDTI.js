import React, {useEffect, useState} from "react"

function QuickDTI() {

    const initInputs = {input1: "", input2: "", input3: "", input4: "", input5: 1500}
    // const [inputs, setInputs] = useState()
    // const [getInputs, setGetInputs] = useState([])
    const [items, setItems] = useState(initInputs);

    const handleChangeDTI = (event) => {
        const {name, value} = event.target
        setItems(prevItems => ({...prevItems, [name]: value}))
    }
    const handleSubmitDTI = () => {
        localStorage.setItem('items', JSON.stringify(items))
        // setItems(items)
        alert("Changes Saved")
    }
    const d3 = Math.round((items.input3 / 12) * 100) / 100
    const d5 = Math.round((d3 + +items.input5) * 100) / 100
    const e5 = d5

    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(items));
    //     console.log(items)
    // }, [items]);
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setItems(items);
         console.log(items)
        }
      }, []);

    //   const {user, token} = res.data
    //   localStorage.setItem("token", token)
    //   localStorage.setItem("user", JSON.stringify(user))
    // const initState = {
    //     user: JSON.parse(localStorage.getItem("user")) || {}, 
    //     token: localStorage.getItem("token") || '',
    //     errMsg: ''
    // }

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
                                    value={items.input3}
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
                                    value={items.input4}
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
                                    value={items.input5}
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
                                    value={items.input1}
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
                                    value={items.input2}
                                    onChange={handleChangeDTI}
                                />
                            </td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                            <td style={{border: "1px solid black", backgroundColor: "#c9daf8"}}></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" style={{backgroundColor: "#c9daf8", margin: "5px", padding: "5px"}}>Submit Changes</button>
            </form>
        </div>
    )
}

export default QuickDTI