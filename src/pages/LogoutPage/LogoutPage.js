import React, { Component } from 'react';
import { actLogoutRequest } from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtemail: '',
            txtpassword: ''
        }
    }
    componentWillMount(){
        this.props.onatLogout();
    }
    render() {
       console.log(this.props.login);
        
        return (
           <Redirect to='/'></Redirect>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onatLogout: () => {
            dispatch(actLogoutRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
