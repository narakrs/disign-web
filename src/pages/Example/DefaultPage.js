import React, { Component } from 'react';
import './dashboardpage.css';
import callApi from './../../utils/apiCaller';
import YouTube from 'react-youtube';
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};
class DefaultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:-1,
            id:-1,
            data:[],
            flag: 0
        }
    }
    componentDidMount() {
        callApi('api.php/view','GET',null).then(res=>{
            console.log(res.data);
            this.setState({
                data:res.data,
                time:res.data[0].time,
                id:0,
                flag:1
            })
        });
        setInterval(
            () => this.setState({ time: this.state.flag?this.state.time - 1 :this.state.time}),
            1000
        );
    }
    render() {
        console.log(this.state.time,this.state.flag);
        const {time,id,data}= this.state;
        if(time===0){
            this.setState(
                {
                time:-1,
                flag:0,
                });
            var form = new FormData();
            form.append("name", localStorage.getItem('ntsuse'));
            form.append("id", data[id].id);
            form.append("time", data[id].time);
            callApi('api.php/view','POST',form).then(res=>{
                this.setState({
                    data:res.data,
                    id:(id+1)%res.data.length,
                    time:res.data[(id+1)%res.data.length].time,
                    flag:1
                });
            });
        }
        return (

            <div className='bginfo' style={{ backgroundColor: '#353836' }}>
                <div className='gflex1'></div>
                <div className='ctinfo' style={{ flexDirection: 'column', display: 'flex' }}>
                <div style={{ width: '100%', justifyContent: 'center',height:390}} className='flexrow'>
                   <div style={{color:'white'}}>{time>0?time:0}</div> 
                </div>
                {time>0
                ?<div style={{ width: '100%', justifyContent: 'center' }} className='flexrow'>
                <YouTube videoId= {data[id].link} opts={opts} onReady={this._onReady} />;
                </div>  
                :null}
               
                </div>
                <div className='gflex1'></div>
            </div>
        );
    }
}

export default DefaultPage;
