import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className='container'>
                <div style={{height:'5px'}}></div>
                <div className='alert alert-warning'>
                    <button type='button' className='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
                    <strong>Trang chưa thực hiện</strong>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
