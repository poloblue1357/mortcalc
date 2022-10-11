import React from "react"

function LoanInput() {
    return (
        <div>
        <h1 style={{display: "flex", justifyContent: "center"}}>Loan Input</h1>
        <h3>Client Info</h3>
        <form>
            <input placeholder="name"/>
            <br/>
            <input placeholder="address"/>
            <br/>
            <input placeholder="phone"/>
            <br/>
            <input placeholder="email"/>
            <br/>
            <select name="loanPurpose">
                <option value="purchase">Purchase</option>
                <option value="refinance">Refinance</option>
            </select>
            <br/>
            <h3>Current Loan / Housing Info (If Applicable)</h3>
            <input placeholder="Current Rate"/>
            <input placeholder="Current Escrow"/>
            <br />
            <input placeholder="Rent/House Pymnt"/>
            <input placeholder="Current MI"/>
            <br />
            
            <h4>Term</h4><select name="term">
                <option value="360">360</option>
                <option value="240">240</option>
                <option value="180">180</option>
                <option value="120">120</option>
            </select>
            <input placeholder="1st Loan Balance"/>
            <br />
            <input placeholder="Last Appraised (If Applicable)"/>
            <input placeholder="Other Debt to be Paid Off"/>
            <br />
            <input placeholder="Adtnl Principal Pmnts / Mos"/>
            <h4>Estimated Payoff:</h4>
            <h3>Loan Terms</h3>
        </form>
        </div>
    )
}

export default LoanInput