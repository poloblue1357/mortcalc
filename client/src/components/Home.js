import React, { useContext } from "react"
import { MortgageContext } from "../ContextProvider"

function Home() {
    const context = useContext(MortgageContext)
    return (
        <div>
            <form style={{display: "flex", justifyContent: "center"}}onSubmit={(event) => {
                event.preventDefault()
                context.handleSubmit()
            }}>
                <input placeholder="Client Search" type="text"name="clientsearch" value={context.clientSearch} onChange={context.handleChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home