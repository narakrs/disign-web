import React, { Component } from 'react';
import './dashboardpage.css';
import { ExcelRenderer, OutTable } from 'react-excel-renderer';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import CallApi from './../../utils/apiCaller';
import ControlPage from './../ControlPage/ControlPage';
import callApi from './../../utils/apiCaller';
import { data } from 'jquery';
const showvnd = (a) => {
    var kq = "";
    if (a / 1000000 > 0) {
        kq = (a / 1000000).toFixed(3) + ' tr';
    }
    else if (a / 1000) {
        kq = (a / 1000).toFixed(2) + ' ng';
    }
    else {
        kq = a.toFixed(2);
    }
    return kq;
}
const TinhTong = (products) => {
    var l = products.length;
    var i = 0;
    var sum = 0;
    while (i < l) {
        sum = sum + products[i]['Thành tiền'];
        i = i + 1;
    }
    return sum;
}
const SoSanh = (a, b) => {
    if (TinhTong(a) > TinhTong(b)) { return true; }
    return false;
}
const TinhPhanTram = (a, b) => {
    if (SoSanh(a, b)) {
        return (100 * (TinhTong(a) - TinhTong(b)) / TinhTong(b)).toFixed(1);
    }
    else {
        return (100 * (TinhTong(b) - TinhTong(a)) / TinhTong(b)).toFixed(1);
    }
}
const sspt = (a, b) => {
    if (a >= b && b!== 0 ) {
        return (100 * (a - b) / b).toFixed(1);
    }
    else if(a < b !== 0)
        return (100 * (b - a) / b).toFixed(1);
    else 
    return a;

}
class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { data, inyt, intd, khtd, khyt } = this.props;
        return (
            <div style={{ width: '100%', height: '150px', backgroundColor: 'white' }}>
                <div style={{ width: '100%', height: '60px', lineHeight: '60px', paddingLeft: '20px', fontWeight: 'bold' }}
                >KẾT QUẢ BÁN HÀNG HÔM NAY</div>
                <div style={{ width: '100%', height: '90px', paddingBottom: '10px' }} className='flexrow'>
                    <div style={{ width: '33.3%', paddingLeft: '20px' }}>
                        <div className='flexrow' >
                            <div className='bgIKL'>
                                <div className='fa fa-dollar iconcenterc' ></div>
                            </div>
                            <div style={{ width: '10px' }}></div>
                            <div style={{ flexGrow: 1 }}>
                                <div style={{ color: '#66666b', fontSize: '11px', fontWeight: 'bold' }}>{intd.length} Đã bán xong</div>
                                <div style={{ fontSize: '20px', color: '#039e18', fontWeight: 'bold' }}>{showvnd(TinhTong(intd))}<span>        </span>
                                    <span style={{ fontSize: '15px', color: SoSanh(intd, inyt)?'green':'#ed6487' }} className={SoSanh(intd, inyt) ? 'fa fa-long-arrow-up' : 'fa fa-long-arrow-down'}> </span>
                                    <span style={{ fontSize: '12px', color: '#66666b', fontWeight: 'bold' }}>  {TinhPhanTram(intd, inyt)}%</span> </div>
                                <div>Hôm qua {showvnd(TinhTong(inyt))}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '33.3%', paddingLeft: '20px' }} className='bdKQBH'>
                        <div className='flexrow' >
                            <div className='bgIKL' style={{ backgroundColor: '#18c0c2' }}>
                                <div className='fa fa-pencil iconcenterc' ></div>
                            </div>
                            <div style={{ width: '10px' }}></div>
                            <div style={{ flexGrow: 1 }}>
                                <div style={{ color: '#66666b', fontSize: '11px', fontWeight: 'bold' }}>{intd.length} số đơn phục vụ</div>
                                <div style={{ fontSize: '20px', color: 'blue', fontWeight: 'bold' }}>{intd.length}<span>        </span>
                                    <span style={{ fontSize: '15px', color:intd.length > inyt.length ?'green':'#ed6487' }} className={intd.length > inyt.length ? 'fa fa-long-arrow-up' : 'fa fa-long-arrow-down'}> </span>
                                    <span style={{ fontSize: '12px', color: '#66666b', fontWeight: 'bold' }}>  {sspt(intd.length, inyt.length)}%</span> </div>
                                <div>Hôm qua {inyt.length}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '33.3%', paddingLeft: '20px' }}>
                        <div className='flexrow' >
                            <div className='bgIKL' style={{ backgroundColor: '#4bac4d' }}>
                                <div className='fa fa-user iconcenterc' ></div>
                            </div>
                            <div style={{ width: '10px' }}></div>
                            <div style={{ flexGrow: 1 }}>
                                <div style={{ color: '#66666b', fontSize: '11px', fontWeight: 'bold' }}> {khtd.length} khách hàng</div>
                                <div style={{ fontSize: '20px', color: 'blue', fontWeight: 'bold' }}>{khtd.length}<span>        </span>
                                    <span style={{ fontSize: '15px', color: khtd.length > khyt.length ?'green':'#ed6487' }} className={khtd.length > khyt.length ? 'fa fa-long-arrow-up' : 'fa fa-long-arrow-down'}> </span>
                                    <span style={{ fontSize: '12px', color: '#66666b', fontWeight: 'bold' }}>  {sspt(khtd.length, khyt.length)}%</span> </div>
                                <div>hôm qua {khyt.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicInfo;
