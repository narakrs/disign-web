import React, { Component } from 'react';
import './login.css';
import CallApi from './../../utils/apiCaller';
import { actLoginRequest } from './../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import callApi from './../../utils/apiCaller';
import genHassPass from './../../components/funtions/GenHashPassword';
var dataRandom = ['G', 'A', 'e', 'J', 'O', 'Q', 'o', 'k', 'T', 'z', 'Y'];
const data=['Ts','Hk','As','nsi','h6','SkIL','E','&','*','-','?','aa',';','jW','15'];
const number=[1,6,8,10,12,0,2,7,5]
class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 3,
            capcha: '',
            thongbao: ''
        }
    }
    componentDidMount() {
        this.onRandom('1')
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
    onLogin = () => {
        console.log(this.state);
        const { txtuser, txtpass, txtpasscf, txtcapcha, capcha } = this.state;
        if (capcha === txtcapcha && txtpass === txtpasscf && txtpass.length > 7 && txtuser.length > 5) {
            var hashedPassword =this.genHassPass(txtpass);
            console.log(hashedPassword)
            var form = new FormData();
            form.append("name", txtuser);
            form.append("password", hashedPassword);
            callApi('api.php/signup', 'POST', form).then(res => {
                if (res.data) {
                    localStorage.setItem('ntsuse', res.data[0].name);
                    localStorage.setItem('data', res.data[0]);
                    this.setState({ login: 1 });
                }
                else this.setState({ login: 0 });
            });
            
        }
        else if (txtuser.length < 6) {
            this.setState({ thongbao: 'Tên đăng nhập quá ngắn' });
        }
        else if (txtpass.length < 8) {
            this.setState({ thongbao: 'Mật khẩu quá ngắn' });
        }
        else if (txtpass !== txtpasscf) {
            console.log('a');
            this.setState({ thongbao: 'Mật khẩu xác nhận không chính xác' });
        }
        else if (capcha !== txtcapcha) {
            this.setState({ thongbao: 'Capcha không chính xác' });
        }

    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');
            this.onLogin('');
        }
    }
    onRandom = (e) => {
        var result = '';
        var t = Math.floor(0 + Math.random() * 10);
        result = result + String(dataRandom[t]);
        t = Math.floor(0 + Math.random() * 10);
        result = result + String(t);
        t = Math.floor(0 + Math.random() * 10);
        result = result + String(t);
        t = Math.floor(0 + Math.random() * 10);
        result = result + String(dataRandom[t]);
        t = Math.floor(0 + Math.random() * 10);
        result = result + String(dataRandom[t]);
        t = Math.floor(0 + Math.random() * 10);
        t = Math.floor(0 + Math.random() * 10);
        result = result + String(dataRandom[t]);
        t = Math.floor(0 + Math.random() * 10);
        result = result + String(dataRandom[t]);
        this.setState({ capcha: result });
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
        const { login, capcha,thongbao } = this.state;
        if (login == 1) { return <Redirect to='/Dashboard' /> }
        else if (login == 0) this.setState({thongbao :'Tên đăng nhập đã tồn tại'});
        else if (login == 4) { return <Redirect to='/' /> }
        return (
            <div className='bglogin'>
                <div className='panellogin1 flexcolunm centerlogin'>
                    <div className='bgiplogin '>
                        <input type='text' className='inputloginstyle'
                            placeholder='Tên đăng nhập' name='txtuser'
                            onChange={this.onChange}
                        ></input>
                        <div className='imgWeb' onClick={this.onLogin}>
                            <img alt="web icon" src={require('./../../image/iconweb.png')} className='styleimgweb' />
                        </div>
                    </div>
                    <div className='bgiplogin '>
                        <input type='password' className='inputloginstyle'
                            placeholder='Mật khẩu' name='txtpass'
                            onChange={this.onChange}
                        ></input>
                    </div>
                    <div className='bgiplogin '>
                        <input type='password' className='inputloginstyle'
                            placeholder='Nhập lại mật khẩu' name='txtpasscf'
                            onChange={this.onChange}
                        ></input>
                    </div>
                    <div className='bgiplogin '>
                        <div className='flexrow'>
                            <div style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} className='flexrow'>
                                <div className='fa fa-retweet iconswap' onClick={() => this.onRandom('1')}></div>
                            </div>
                            <div style={{ textAlign: 'left', fontWeight: 'bold', height: '100%', lineHeight: '40px', fontSize: '25px' }}>{capcha}</div>
                            <div style={{ width: 15 }}></div>
                            <input className='inputloginstyle1'
                                placeholder='Nhập mã' name='txtcapcha'
                                onChange={this.onChange} onKeyDown={this._handleKeyDown}
                            ></input>
                        </div>
                        <div className='bgbtnlogin2' onClick={this.onLogin}>
                            Đăng ký
                        </div>
                        <div className='bgbtnlogin1' onClick={()=>this.setState({login:4})}> Đăng nhập</div>
                        <div className='bgthongbao1'>{thongbao}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
