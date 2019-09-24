
import React, {useState, useEffect} from 'react';

function ViewContracts() {

    const [contracts, setContract] = useState([])

    const fetchContracts = () => {
        fetch('http://localhost:3001/contracts/all-contracts')
        .then(response => response.json())
        .then(json => {
            setContract(json.contracts)
        })
    }

    useEffect(() => {
        fetchContracts()
    }, [])

    return(
            <div>
                {contracts.map(contract => {
                    return <ul key={contract._id}>
                                    <li>Customer First Name: {contract.customerFirstName}</li>
                                    <li>Customer Last Name: {contract.customerLastName}</li>
                                    <li>ESI ID: {contract.esiId}</li>
                                    <li>Customer Address: {contract.customerAddress}</li>
                                    <li>Plan Name: {contract.planName}</li>
                                    <li>Plan Length: {contract.planLength}</li>
                                    <li>TDSP: {contract.tdsp}</li>
                                    <li>Expiration Date: {contract.expirationDate}</li>
                            </ul>
                })}
            </div>
    )
};

export default ViewContracts;