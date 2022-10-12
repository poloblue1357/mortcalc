import React from "react"

function LoanInput() {
    return (
        <div style={{display: "grid"}}>
            <h1 style={{display: "flex", justifyContent: "center"}}>Loan Input</h1>
            <h2>Client Info</h2>
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
                <h2>Current Loan / Housing Info (If Applicable)</h2>
                <div style={{display: "flex"}}>
                    <input placeholder="Current Rate"/><p style={{margin: "5px"}}>5%</p>
                    <input placeholder="Current Escrow"/><p style={{margin: "5px"}}>10%</p>
                </div>
                <br />
                <div style={{display: "flex"}}>
                    <input placeholder="Rent/House Pymnt"/><p style={{margin: "5px"}}></p>
                    <input placeholder="Current MI"/><p style={{margin: "5px"}}></p>
                </div>
                <br />
                <div style={{display: "flex"}}>
                    <h4>Term</h4>
                    <select name="term" style={{margin: "5px"}}>
                        <option value="360">360</option>
                        <option value="240">240</option>
                        <option value="180">180</option>
                        <option value="120">120</option>
                    </select>
                    <input placeholder="1st Loan Balance" style={{margin: "5px"}}/><p style={{margin: "5px"}}></p>
                </div>
                <br />
                <div style={{display: "flex"}}>
                    <input placeholder="Last Appraised (If Applicable)"/><p style={{margin: "5px"}}></p>
                    <input placeholder="Other Debt to be Paid Off"/><p style={{margin: "5px"}}></p>
                </div>
                <br />
                <div style={{display: "flex"}}>
                    <input placeholder="Adtnl Principal Pmnts / Mos"/><p style={{margin: "5px"}}></p>
                    <h4>Estimated Payoff:</h4><p style={{margin: "5px"}}></p>
                </div>
                <h2>Loan Terms</h2>
                {/* <div style={{display: "flex"}}>
                    <h4>Loan Type</h4>
                    <select style={{margin: "5px"}}>
                        <option value="conventional">Conventional</option>
                        <option value="fha">FHA</option>
                        <option value="va">VA</option>
                        <option value="usda">USDA</option>
                    </select>
                    <select style={{margin: "5px"}}>
                        <option value="conventional">Conventional</option>
                        <option value="fha">FHA</option>
                        <option value="va">VA</option>
                        <option value="usda">USDA</option>
                    </select>
                    <select style={{margin: "5px"}}>
                        <option value="conventional">Conventional</option>
                        <option value="fha">FHA</option>
                        <option value="va">VA</option>
                        <option value="usda">USDA</option>
                    </select>
                </div>
                <br />
                <div style={{display: "flex"}}>
                    <h4>Quote Title</h4>
                    <p style={{margin: "12px"}}>Best Rate / <br />
                        Higher Cost</p>
                    <p style={{margin: "12px"}}>Better Rate / <br />
                        Moderate Cost</p>
                    <p style={{margin: "12px"}}>Good Rate / <br />
                        Low Cost</p>
                </div>
                <br /> */}
                <table>
                    <tbody>
                            <tr>
                                <td style={{border: "1px solid black"}}>Loan Type:</td>
                                <td style={{border: "1px solid black"}}>
                                    <select>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <select>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <select>
                                        <option value="conventional">Conventional</option>
                                        <option value="fha">FHA</option>
                                        <option value="va">VA</option>
                                        <option value="usda">USDA</option>
                                    </select>
                                </td>
                            </tr>
                            <tr style={{border: "1px solid black"}}>
                                <td style={{border: "1px solid black"}}>
                                    Quote Title
                                </td>
                                <td style={{border: "1px solid black"}}>Best Rate / Higher Cost</td>
                                <td style={{border: "1px solid black"}}>Better Rate / Moderate Cost</td>
                                <td style={{border: "1px solid black"}}>Good Rate / Low Cost</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>
                                    <h4>Rate</h4> 
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input placeholder="Rate %"/>%
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input placeholder="Rate %"/>%
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input placeholder="Rate %"/>%
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Credit(-) / Discount(+) %</td>
                                <td style={{border: "1px solid black"}}>
                                    <input />
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input />
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <input />
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Additional Credit / Discount</td>
                                <td style={{border: "1px solid black"}}><input /></td>
                                <td style={{border: "1px solid black"}}><input /></td>
                                <td style={{border: "1px solid black"}}><input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Appraised Value</td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Purchase Price</td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Base Loan Amount</td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>UFMIP / Funding Fee %</td>
                                <td style={{border: "1px solid black"}}><input /></td>
                                <td style={{border: "1px solid black"}}><input /></td>
                                <td style={{border: "1px solid black"}}><input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>UFMIP / Funding Fee $</td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Final Loan Amount</td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Loan Term</td>
                                <td style={{border: "1px solid black"}}>
                                    <select>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <select>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select>
                                </td>
                                <td style={{border: "1px solid black"}}>
                                    <select>
                                        <option>360</option>
                                        <option>300</option>
                                        <option>240</option>
                                        <option>180</option>
                                        <option>120</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Monthly MI Factor</td>
                                <td style={{border: "1px solid black"}}><input /></td>
                                <td style={{border: "1px solid black"}}><input /></td>
                                <td style={{border: "1px solid black"}}><input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Monthly MI Premium</td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>LTV (FYI)</td>
                                <td style={{border: "1px solid black"}}><input />%</td>
                                <td style={{border: "1px solid black"}}><input />%</td>
                                <td style={{border: "1px solid black"}}><input />%</td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>P&I Payment</td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Adtnl Monthly Pymnts</td>
                                <td style={{border: "1px solid black"}}><input /></td>
                                <td style={{border: "1px solid black"}}><input /></td>
                                <td style={{border: "1px solid black"}}><input /></td>
                            </tr>
                            <tr>
                                <td style={{border: "1px solid black"}}>Cash to CLose</td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                                <td style={{border: "1px solid black"}}>$<input /></td>
                            </tr>
                            <h2>Closing Costs</h2>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default LoanInput