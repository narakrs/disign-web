import React, { Component} from 'react';
import { Route, Link } from 'react-router-dom';
import {menus} from './menus';
import './../Menu/menu.css';
import MenuLink from './MenuLink';
import './topmenu.css';

class TopMenu extends Component {
    render() {
        return (
            <div className='bgmenu flexrow cltopmenu' style={{height:35}}>
                <div className='gflex1'></div>
                <div style={{ width: 1270, height: '100%' }} className='flexrow flexend'>
                    {this.showMenus(menus)}
                    <div className='gflex1'></div>
                    <div style={{position:'relative'}}>
                    <div style={{position:'absolute', top:5,left:20,fontWeight:'bold',color:'white',fontSize:18}}>Viewer</div>
                    <div  style={{fontSize:'30px',color:'green',marginTop:'2px'}}  className='fa fa-youtube' alt="Girl in a jacket"/>
                    </div>
                </div>
                <div className='gflex1'></div>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        icon={menu.icon}
                        list={menu.list}
                    />
                );
            });
        }
        return result;
    }

}

export default TopMenu;
