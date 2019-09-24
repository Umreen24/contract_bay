import React from 'react';
import logo from '../logo/contract.png';
import '../styles.css'
import Menu from './Menu';

function BaseLayout(props) {
    return (
        <div>
            <img className='contract-logo' src={logo} alt='logo'/>
            <span className='title'>Contract Bay</span>
            <span className='sub-title'>contract renewals made easy</span>
            <Menu/>
            <div>{props.children}</div>
        </div>
    )
};

export default BaseLayout;