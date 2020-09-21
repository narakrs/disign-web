import React, { Component } from 'react';
import './dashboardpage.css';
import callApi from './../../utils/apiCaller';
import YouTube from 'react-youtube';
const opts = {
    height: '540',
    width: '920',
    playerVars: {
        autoplay: 1,
    },
};
class DefaultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: -1,
            id: -1,
            data: [],
            flag: 0
        }
    }
    componentDidMount() {
        callApi('api.php/view', 'GET', null).then(res => {
            console.log(res.data);
            this.setState({
                data: res.data,
                time: res.data[0].time,
                id: 0,
                flag: 1
            })
        });
        setInterval(
            () => this.setState({ time: this.state.flag ? this.state.time - 1 : this.state.time }),
            1000
        );
    }
    render() {
        console.log(this.state.time, this.state.flag);
        const { time, id, data } = this.state;
        if (time === 0) {
            this.setState(
                {
                    time: -1,
                    flag: 0,
                });
            var form = new FormData();
            form.append("name", localStorage.getItem('ntsuse'));
            form.append("id", data[id].id);
            form.append("time", data[id].time);
            callApi('api.php/view', 'POST', form).then(res => {
                localStorage.setItem('score',res.data.user[0].score);
                this.setState({
                    data: res.data.views,
                    id: (id + 1) % res.data.views.length,
                    time: res.data.views[(id + 1) % res.data.views.length].time,
                    flag: 1
                });
            });
        }
        return (

            <div className='bginfo' style={{ backgroundColor: '#353836' }}>
                <div className='gflex1'></div>
                <div className='ctinfo' style={{ flexDirection: 'column', display: 'flex' }}>
                    <div style={{ width: '100%', justifyContent: 'center' }} className='flexrow'>
                        <div style={{ color: 'white', width: 920, textAlign: 'center' }}>{time > 0 ? time : 0}</div>
                        <div style={{ flexGrow: 1 }}></div>
                    </div>
                    {time > 0
                        ? <div style={{ width: '100%', justifyContent: 'center' }} className='flexrow'>
                            <div style={{ width: 920 }}>
                                <YouTube videoId={data[id].link} opts={opts} onReady={this._onReady} />
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div style={{ width: '100%', height: 'auto', padding: 40 }}>
                                    <div style={{ width: '100%', height: '100%', borderRadius: 5 }}>
                                        <div className='bgcontentdb'>
                                            <div className='contentbg'>
                                                <div className='headerct'>Điểm của bạn</div>
                                                <div className='txtcontent'><span className='fa fa-usd'></span>{localStorage.getItem('score')}</div>
                                                <div style={{ height: '1px', width: '100%', backgroundColor: 'white' }}></div>
                                                <div className='txtbutton'> Mua Ngay </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        : null}

                </div>
                <div className='gflex1'></div>
            </div>
        );
    }
}

export default DefaultPage;
