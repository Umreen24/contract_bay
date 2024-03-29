import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

function Menu(props) {

    const handleSignOut = () => {
        localStorage.removeItem('jwt')
        props.onSignOut()
    }

    return(
        <ul className='menu'>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            {props.authenticated ? <li><NavLink to="/all-contracts">View All Contracts</NavLink></li>: null}
            {/* {props.authenticated ? <li><NavLink to="/filter-contracts">Filter Contracts</NavLink></li>: null} */}
            {props.authenticated ? <li><NavLink to="/expiring-contracts">Expiring Contracts</NavLink></li>: null}
            {/* {props.authenticated ? <li><NavLink to="/tdsp">Filter by TDSP</NavLink></li>: null} */}
            {props.authenticated ? <li><NavLink to="/add-contract">Add New Contract</NavLink></li>: null}
            {props.authenticated ? <li><a onClick={() => handleSignOut()} href="/login">Sign Out</a></li>: null}

        </ul>
    )
};

const mapStateToProps = (state) => {
    return{
        authenticated: state.isAuthenticated
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onSignOut: () => dispatch({type: 'SIGN_OUT'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);