import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { menus } from './menus';
import './menu.css';
import MenuLink from './MenuLink';

export default class RowMenus extends Component {
    render() {
        const { list } = this.props;
        return (
            <div className='bgrowmenus'>
                {list ? list.map((data, index) => (
                    <Link key={index} to={data.to} style={{ textDecoration: 'none', color: 'white' }} className='menurow'>
                        <span className={`pdlr3 ${data.icon} icfmn`}></span>{data.name}
                    </Link>
                )) : null}
            </div>
        );
    }
}

