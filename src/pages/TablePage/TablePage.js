import React, { Component } from 'react';
import FilterColumn from './../FilterdataPage/FilterColumn';

export default class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slice: 0,
      showfl:false
    }
  }
  onUpdateFilter=(key,value,iduser)=>{
    this.props.onUpdateFilter(key,value,iduser);
  }
  createSlice = (value, limit) => {
    var n = parseInt(value / 5, 10) * 5 + 5;
    n > limit ? n = limit : null;
    var n0 = parseInt(value / 5, 10) * 5 + 1;
    let table = []
    for (let i = n0; i <= n; i++) {
      table.push(<div className={value + 1 === i ? 'bgsltslice clsl1' : 'bgsltslice'} onClick={() => this.setState({ slice: i - 1 })}>{i}</div>)
    }
    return table;
  }
  render() {
    const { slice,showfl } = this.state;
    const { data, filter } = this.props;
    const dataslice = data.slice(slice * 10, slice * 10 + 10);
    var l = parseInt(data.length / 10, 10) + 1;
    const key = Object.keys(filter);
    var dt = [];
    key.map((item, index) => {
      if (filter[item] === 1 && item !== 'iduser') {
        dt.push(item);
        return true;
      }
      return false;
    });
    return (
      <div className='bgtable' >
        <div className='bgflclunm flexrowEnd alcenter App' >
          <div className='bgctactionfl ' onMouseMove={()=>this.setState({showfl:true})}  onMouseLeave={()=>this.setState({showfl:false})}>
            <span className='fa fa-th pd5'></span>
            <span className='fa fa-caret-down pd5'></span>
            {showfl?<FilterColumn filter={filter}  onUpdateFilter={this.onUpdateFilter}></FilterColumn>:null}
          </div>
        </div>
        {dt && key ? (
          <div >
            <div className='scrlwxdad'>
              <div className='scrlwxdadchild'>
                <table >
                  <tr className="trthtable" >
                    {dt.map((item, index) => (
                      <th className="thtable">{item}</th>
                    ))}
                  </tr>
                  {dataslice.map((item, index) => (
                    <tr className={index % 2 === 0 ? 'clt1 slttb' : 'clt2 slttb'}>
                      {dt.map((data, stt) => (
                        <td className="tdtable">{item[data]}</td>
                      ))}
                    </tr>
                  ))}
                </table>
              </div>
            </div>
            <div className='bgslice flexrow alcenter'>
              <div className='bgsltslice' onClick={() => this.setState({ slice: 0 })}><span className='fa fa-step-backward'></span></div>
              <div className='bgsltslice' onClick={() => this.setState({ slice: slice - 1 === -1 ? slice : slice - 1 })}><span className='fa fa-caret-left'></span></div>
              {
                this.createSlice(slice, l)
              }
              <div className='bgsltslice' onClick={() => this.setState({ slice: 5 + parseInt(this.state.slice / 5, 10) * 5 })}>...</div>
              <div className='bgsltslice' onClick={() => this.setState({ slice: slice === l - 1 ? slice : slice + 1 })}><span className='fa fa-caret-right'></span></div>
              <div className='bgsltslice' onClick={() => this.setState({ slice: l - 1 })}><span className='fa fa-step-forward'></span></div>
              <div>Hiển thị 1-{l} trên tổng số {data.length} khách hàng</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
