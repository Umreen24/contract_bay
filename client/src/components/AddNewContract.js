
import React, {useState} from 'react';
import axios from 'axios';

function AddNewContract(props) {

    const [contract, setContract] = useState({
        customerName: '',
        customerAccountNumber: '',
        esiId: '',
        customerAddress: '',
        planName: '',
        planLength: '',
        tdsp: ''
    })

    const handleAddContract = () => {
        axios.post('http://localhost:3001/contracts/add-contract', {
            customerName: contract.customerName,
            customerAccountNumber: contract.customerAccountNumber,
            esiId: contract.esiId,
            customerAddress: contract.customerAddress,
            planName: contract.planName,
            planLength: contract.planLength,
            tdsp: contract.tdsp
        }).then(response => {
            console.log(response.data)
            props.history.push('/all-contracts')
        })
    }

    const handleTextChange = (e) => {
        setContract({
            ...contract,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className='add-contract'>
            <span className='add-contract-sub-title'>Add New Contract</span>
            <label className='add-contract-input'>Customer Name: <input type='text' name='customerName' placeholder='Enter customer name' className='id-number' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>Customer Account Number: <input type='text' name='customerAccountNumber' placeholder='Enter customer account number' className='id-number' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>ESI ID: <input type='text' name='esiId' placeholder='Enter customer ESI ID' className='id-number' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>Customer Address: <input type='text' name='customerAddress' placeholder='Enter customer address' className='id-number' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>Plan Name: <input type='text' name='planName' placeholder='Enter customer plan name' className='id-number' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>Plan Length: <input type='text' name='planLength' placeholder='Enter plan length' className='id-number' onChange={(e) => handleTextChange(e)}/></label>
            <label className='add-contract-input'>TDSP: <input type='text' name='tdsp' placeholder='Enter customer TDSP' className='id-number' onChange={(e) => handleTextChange(e)}/></label>
            <button className='register-btn' onClick={() => handleAddContract()}>Add Contract</button>
        </div>
    )
}

export default AddNewContract;