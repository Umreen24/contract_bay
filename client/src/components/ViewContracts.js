
import React, {useState, useEffect} from 'react';
import * as moment from 'moment';

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
                    return <ul className='contract-info' key={contract._id}>
                                    <li>Customer Name: {contract.customerName}</li>
                                    <li>ESI ID: {contract.esiId}</li>
                                    <li>Customer Address: {contract.customerAddress}</li>
                                    <li>Plan Name: {contract.planName}</li>
                                    <li>Plan Length: {contract.planLength} months</li>
                                    <li>TDSP: {contract.tdsp}</li>
                                    <li>Expiration Date: {moment(contract.expirationDate).format('MM/DD/YYYY')}</li>
                            </ul>
                })}
            </div>
    )
};

export default ViewContracts;