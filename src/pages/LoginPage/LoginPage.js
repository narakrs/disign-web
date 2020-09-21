import React, { Component } from 'react';
import './login.css';
import CallApi from './../../utils/apiCaller';
import { actLoginRequest } from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import callApi from './../../utils/apiCaller';
const data=['Ts','Hk','As','nsi','h6','SkIL','E','&','*','-','?','aa',';','jW','15'];
const number=[1,6,8,10,12,0,2,7,5]
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtemail: '',
            txtpassword: '',
            login:3
        }
    }
    componentDidMount(){
        CallApi('connected','GET',null).then(res=>{
            console.log(res);
        });
    }
    onLogin = () => {
        console.log(this.state);
        const { txtemail, txtpassword } = this.state;
        var hashedPassword = this.genHassPass(txtpassword);
        var form = new FormData();
        form.append("name", txtemail);
        form.append("password", hashedPassword);
        console.log(hashedPassword);
        callApi('api.php/user','POST',form).then(res=>{
            if(res.data){
            localStorage.setItem('ntsuse',res.data[0].name);
            localStorage.setItem('score',res.data[0].score);
            this.setState({login:1});}
            else this.setState({login:0});
        });
    }
    _handleKeyDown=(e)=>{
        if (e.key === 'Enter') {
            console.log('do validate');
            this.onLogin('');
        }
    }
    genHassPass=(value)=>{
        var l= value.length;
        var i=0;
        var datagen='';
        while(i<l){
            datagen=datagen+value[i]+data[number[i%9]]+data[i%15];
            i=i+1;
        }
        return datagen;
    }
    
    onChange = (e) => {
        var { target } = e;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        var thongbao = '';
        const {login}=this.state;
        if (login == 1) { return <Redirect to='/Dashboard' /> }
        if (login == 4) { return <Redirect to='/Signup' /> }
        else if (login == 0) thongbao = 'Sai email đăng nhập hoặc mật khẩu';
        return (
            <div className='bglogin'>
                <div className='panellogin flexcolunm centerlogin'>
                    <div className='bgiplogin '>
                        <input type='text' className='inputloginstyle'
                            placeholder='Tên đăng nhập' name='txtemail'
                            onChange={this.onChange}
                        ></input>
                        <div className='imgWeb' onClick={this.onLogin}>
                        <img  alt="web icon"  src={require('./../../image/iconweb.png')} className='styleimgweb'/>
                        </div>
                    </div>
                    <div className='bgiplogin ' >
                        <input type='password' className='inputloginstyle'
                            placeholder='Mật khẩu' name='txtpassword'
                            onChange={this.onChange} onKeyDown={this._handleKeyDown}
                        ></input>
                        <div className='bgbtnlogin' onClick={this.onLogin}>
                            Đăng nhập
                        </div>
                        <div className='bgbtnlogin1' onClick={()=>this.setState({login:4})}> Đăng ký</div>
                        
                        <div className='bgthongbao'>{thongbao}</div>
                    </div>

                </div>

            </div>
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
        onatLogin: (email, password) => {
            dispatch(actLoginRequest(email, password));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
