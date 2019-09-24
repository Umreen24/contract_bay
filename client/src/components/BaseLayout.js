import React from 'react';
import logo from '../logo/contract.png';
import '../styles.css'

function BaseLayout(props) {
    return (
        <div>
            <img className='contract-logo' src={logo} alt='logo'/>
            <span className='title'>Contract Bay</span>
            <div>{props.children}</div>
        </div>
    )
};

export default BaseLayout;