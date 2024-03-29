
import React, {useState, useEffect} from 'react';
import * as moment from 'moment';

function ViewContracts(props) {

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

    const deleteContract = (id) => {
        fetch(`http://localhost:3001/contracts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id
            })
        })
        .then(response => {
            props.history.push('/all-contracts')
        })
    }

    return(
            <div>
                {contracts.map(contract => {
                    return <ul className='contract-info' key={contract._id}>
                                    <li>Customer Name: {contract.customerName}</li>
                                    <li>Account Number: {contract.customerAccountNumber}</li>
                                    <li>ESI ID: {contract.esiId}</li>
                                    <li>Customer Address: {contract.customerAddress}</li>
                                    <li>Plan Name: {contract.planName}</li>
                                    <li>Plan Length: {contract.planLength} months</li>
                                    <li>TDSP: {contract.tdsp}</li>
                                    <li>Expiration Date: {moment(contract.sendEmailDate).format('MM/DD/YYYY')}</li>
                                    <button className='delete-btn' onClick={() => deleteContract(contract._id)}>Delete Contract</button>
                            </ul>
                })}
            </div>
    )
};

export default ViewContracts;