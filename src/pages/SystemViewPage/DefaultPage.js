import React, { Component } from 'react';
import './dashboardpage.css';
import callApi from './../../utils/apiCaller';
import YouTube from 'react-youtube';
class DefaultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showadd: false,
            link: '',
            thoigianxem: '',
            quantity: '',
            img: '',
            linkvideo: '',
            campain: []
        }
    }
    onDelete = (e) => {
        var name = localStorage.getItem('ntsuse');
        var form = new FormData();
        form.append("user", name);
        form.append("action", 'delete');
        form.append("id", e);
        form.append("plus", 100);
        callApi('api.php/campains', 'POST', form).then(res => {
            if (res.data) {
                console.log(res.data);
                localStorage.setItem('score', res.data.user[0].score);
                this.setState({
                    campain: res.data.campain ? res.data.campain : [],
                });
            }
            else this.setState({ login: 0 });
        })
    }
    onInsert = (e) => {
        console.log(this.state);

        const { thoigianxem, quantity, linkvideo, campain } = this.state;
        var name = localStorage.getItem('ntsuse');
        var form = new FormData();
        form.append("user", name);
        form.append("views", quantity);
        form.append("time", thoigianxem);
        form.append("link", linkvideo);
        callApi('api.php/insertviews', 'POST', form).then(
            res => {
                if (res.data) {
                    console.log(res.data);
                    localStorage.setItem('score', res.data.user[0].score);
                    this.setState({
                        showadd: false,
                        link: '',
                        thoigianxem: '',
                        quantity: '',
                        img: '',
                        linkvideo: '',
                        campain: res.data.campain
                    });
                }
                else this.setState({ login: 0 });
            }
        )
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onChangeLink = (e) => {
        var value = e.target.value;
        var linkth = value.slice(32, 43);
        this.setState({
            link: value,
            img: "https://i.ytimg.com/vi/" + linkth + "/maxresdefault.jpg",
            linkvideo: linkth
        })
    }
    componentDidMount() {
        var name = localStorage.getItem('ntsuse');
        var form = new FormData();
        form.append("user", name);
        form.append("action", 'get');
        callApi('api.php/campains', 'POST', form).then(res => {
            if (res.data) {
                console.log(res.data);
                this.setState({
                    campain: res.data
                });
            }
            else this.setState({ login: 0 });
        })
    }
    render() {
        const { showadd, img, thoigianxem, link, quantity, campain } = this.state;
        console.log(campain);
        return (

            <div className='bginfo' style={{ backgroundColor: '#353836' }}>
                <div className='gflex1'></div>
                <div className='ctinfo' style={{ flexDirection: 'row', display: 'flex' }}>
                    <div style={{ flexDirection: 'column', display: 'flex', flexGrow: 1 }}>
                        <div style={{ width: '100%', justifyContent: 'center' }} className='flexrow'>
                            <div className="btn btn-large btn-block btn-info" style={{ width: 120 }}
                                onClick={() =>campain.length<3? this.setState({ showadd: true }):null}>Thêm dự án <span className='fa fa-plus'></span></div>
                            <div style={{ flexGrow: 1 }}></div>
                        </div>
                        <div style={{ width: '100%', height: 10 }}></div>
                        {showadd ?
                            <div style={{ width: '100%', justifyContent: 'center' }} className='flexrow'>
                                <div class="panel panel-success">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Thêm Dự án</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div style={{ width: 'auto' }} className='flexrow'>

                                            <div style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
                                                <input placeholder='Link video Youtube ...' className='stinputs' name='link' onChange={this.onChangeLink} value={link}></input>
                                                <div style={{ height: '10px' }}></div>
                                                <input placeholder='Thời gian ...' className='stinputs' name='thoigianxem' onChange={this.onChange} value={thoigianxem}></input>
                                                <div style={{ height: '10px' }}></div>
                                                <input placeholder='Số lượng ...' className='stinputs' name='quantity' onChange={this.onChange} value={quantity}></input>
                                            </div>
                                            <div style={{ width: '250px', paddingLeft: '10px' }}>
                                                <div style={{ width: '100%', height: '100%', backgroundColor: '#82807d', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }} className='flexrow'>
                                                    <img src={img}
                                                        style={{ height: '100px' }} alt="video" />
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ height: 10 }}></div>
                                        <div style={{ width: 'auto' }} className='flexrow'>
                                            <div class="btn btn-success" onClick={() =>thoigianxem*quantity<localStorage.getItem('score')? this.onInsert(''):null}>Thêm <span className='fa fa-edit'></span></div>
                                            <div style={{ width: 10 }}></div>
                                            <div class="btn  btn-danger" onClick={() => this.setState({ showadd: false })}>Hủy <span className='fa fa-remove' ></span></div>
                                            <div style={{paddingLeft:120,fontWeight:'bold',paddingTop:10}}>{thoigianxem&&quantity?`${thoigianxem*quantity}/${localStorage.getItem('score')}`:null}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> : null}

                        <div style={{ width: '100%', justifyContent: 'center', color: 'white', paddingTop: 10 }} className='flexrow'>
                            <div style={{ fontWeight: 'bold' }}>DỰ ÁN CỦA BẠN </div>
                            <div style={{ flexGrow: 1 }}></div>
                        </div>
                        {campain.map((item, index) => (
                            <div key={index} style={{ width: '100%', justifyContent: 'center', color: 'white', padding: 10, height: 140 }} className='flexrow'>
                                <div className='bgduan' style={{ backgroundColor: item.views==='0'?'#fa697f':null }}>
                                    <div className='headduan'>Video</div>
                                    <div className='ctduan'>
                                        <img src={`https://i.ytimg.com/vi/${item.link}/maxresdefault.jpg`} style={{ with: '200px', height: '90px' }} alt="video" />
                                    </div>
                                </div>
                                <div style={{ width: 2 }}></div>
                                <div className='bgduan' style={{ backgroundColor: item.views==='0'?'#fa697f':null }}>
                                    <div className='headduan'>Time</div>
                                    <div className='ctduan'>
                                        <div>{item.time}</div>
                                    </div>
                                </div>
                                <div style={{ width: 2 }}></div>
                                <div className='bgduan' style={{ backgroundColor: item.views==='0'?'#fa697f':null }}>
                                    <div className='headduan'>Views</div>
                                    <div className='ctduan'>
                                        <div> <span style={{ color:'green' }}>{item.full-item.views}</span>/{item.full}</div>
                                    </div>
                                </div>
                                <div style={{ width: 2 }}></div>
                                <div className='bgduan' style={{ backgroundColor: item.views==='0'?'#fa697f':null }}>
                                    <div className='headduan'>Edit</div>
                                    <div className='ctduan'>
                                        <div className="btn btn-danger" onClick={() => this.onDelete(item.id)}>Delete</div>
                                        <div style={{ width: 10 }}> </div>
                                        <div className="btn btn-info">Edit</div>

                                    </div>
                                </div>
                            </div>
                        ))}
                        <div style={{ width: '100%', justifyContent: 'center', color: 'white', paddingTop: 10 }} className='flexrow'>
                            <div style={{ fontWeight: 'bold', width: '100%', textAlign: 'center', color: 'white' }}>Chỉ được phép chạy 3 dự án cùng lúc</div>
                        </div>
                    </div>
                    <div style={{ width: '35%' }}>
                        <div style={{ width: '100%', height: 'auto', padding: 40 }}>
                            <div style={{ width: '100%', height:'100%',borderRadius:5 }}>
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
                <div className='gflex1'></div>
            </div>
        );
    }
}

export default DefaultPage;
