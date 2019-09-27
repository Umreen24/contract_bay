import React, {useState} from 'react';
import axios from 'axios';
import * as moment from 'moment';

function FilterByTdsp() {

    const [contracts, setFilteredContracts] = useState([])

    const handleTdsp = (tdsp) => {
        console.log(tdsp)
        axios.get(`http://localhost:3001/tdsp/${tdsp}`)
        .then(response => {
            setFilteredContracts(response.data.contract)
            console.log(response.data)
        })
    }

    return(
        <div className='filter-list'>
            <span className='filter-title'>Select Plan Term</span>
            <button className='filter-btn' onClick={() => handleTdsp()}>12 Month Plans</button>
            <button className='filter-btn' onClick={() => handleTdsp()}>3 Month Plans</button>
            <button className='filter-btn' onClick={() => handleTdsp()}>6 Month Plans</button>
            <button className='filter-btn' onClick={() => handleTdsp()}>6 Month Plans</button>
            {contracts.map(contract => {
                return <ul className='filtered-contracts'>
                        <li>Customer Name: {contract.customerName}</li>
                        <li>Account Number: {contract.customerAccountNumber}</li>
                        <li>ESI ID: {contract.esiId}</li>
                        <li>Customer Address: {contract.customerAddress}</li>
                        <li>Plan Name: {contract.planName}</li>
                        <li>Plan Length: {contract.planLength}</li>
                        <li>TDSP: {contract.tdsp}</li>
                        <li>Expiration Date: {moment(contract.sendEmailDate).format('MM/DD/YYYY')}</li>
                        </ul>
            })}
        </div>
    )
};

export default FilterByTdsp;