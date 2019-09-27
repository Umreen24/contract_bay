import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as moment from 'moment';

function ExpiringContracts() {

    const [expiringContract, setExpContracts] = useState([])

    const fetchExpContracts = () => {
        axios.get('http://localhost:3001/exp-date/getTodayExpDate')
        .then(response => {
            setExpContracts(response.data.expiringContract)
            console.log(response.data)
        })
    }

    useEffect(() => {
        fetchExpContracts()
    }, [])

    return(
        <div>
            <span className='filter-title'>Expiring Contracts</span>
            {expiringContract.map(expContract => {
                return  <ul className='filtered-contracts'>
                            <li>Customer Name: {expContract.customerName}</li>
                            <li>Account Number: {expContract.customerAccountNumber}</li>
                            <li>ESI ID: {expContract.esiId}</li>
                            <li>Customer Address: {expContract.customerAddress}</li>
                            <li>Plan Name: {expContract.planName}</li>
                            <li>Plan Length: {expContract.planLength}</li>
                            <li>TDSP: {expContract.tdsp}</li>
                            <li>Expiration Date: {moment(expContract.sendEmailDate).format('MM/DD/YYYY')}</li>
                        </ul>
            })}
        </div>
    )
}

export default ExpiringContracts;