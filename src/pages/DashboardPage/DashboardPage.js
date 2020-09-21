import React, { Component } from 'react';
import './dashboardpage.css';
import callApi from './../../utils/apiCaller';
import YouTube from 'react-youtube';
import { Redirect, Link } from 'react-router-dom';
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,
    },
};
class DashboardPage extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     ,

        // }
    }
    onTo = (e) => {
        const { _title } = this.refs
        console.log('s', _title);
        _title.updater.isMounted();
    }
    render() {
        return (
            <div className='bginfo' style={{ backgroundColor: '#353836' }}>
                <div className='gflex1'></div>
                <div className='ctinfo' style={{ flexDirection: 'column', display: 'flex' }}>
                    <div className='flexrow' style={{ width: '100%', height: 'auto' }}>
                        <div style={{ width: '40px' }}></div>
                        <div className='bgcontentdb'>
                            <div className='contentbg'>
                                <div className='headerct'>Điểm của bạn</div>
                                <div className='txtcontent'><span className='fa fa-usd'></span>{localStorage.getItem('score')}</div>
                                <div style={{ height: '1px', width: '100%', backgroundColor: 'white' }}></div>
                                <div className='txtbutton'> Mua Ngay </div>
                            </div>
                        </div>
                        <div className='bgcontentdb'>
                            <div className='contentbg'>
                                <div className='headerct'>Kim cương của bạn</div>
                                <div className='txtcontent' ><span className='fa fa-diamond'></span><span>    </span>0</div>
                                <div style={{ height: '1px', width: '100%', backgroundColor: 'white' }}></div>
                                <div className='txtbutton'> Xem chi tiết</div>
                            </div>
                        </div>
                        <div className='bgcontentdb'>
                            <div className='contentbg'>
                                <div className='headerct'>Trao đổi view</div>
                                <Link to='/Views' style={{ textDecoration: 'none' }}>
                                    <div className='txtcontent' style={{ fontSize: '60px', color: 'white' }}><span className='fa fa-youtube-play ytred'></span></div>
                                </Link>
                                <div style={{ height: '1px', width: '100%', backgroundColor: 'white' }}></div>
                                <Link to='/Views' style={{ textDecoration: 'none' }}>
                                    <div className='txtbutton' style={{ position: 'relative' }}> Xem ngay
                                </div>
                                </Link>

                            </div>
                        </div>
                        <div className='bgcontentdb2'>
                            <div className='contentbg'>
                                <div className='headerct'>Thông báo</div>
                                <div className='txtcontent'>
                                    <span className='fa fa-usd'></span> 15</div>

                            </div>
                        </div>
                        <div style={{ width: '40px' }}></div>
                    </div>
                    <div className='flexrow'>
                        <div style={{ width: '40px' }}></div>
                        <iframe width="640" height="390" src="https://www.youtube.com/embed/8ONZCuufNPU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                    </div>

                </div>
                <div className='gflex1'></div>
            </div>
        );
    }
}

export default DashboardPage;
