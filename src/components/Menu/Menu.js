import React, { Component} from 'react';
import { Route, Link } from 'react-router-dom';
import {menus} from './menus';
import './menu.css';
import MenuLink from './MenuLink';

class Menu extends Component {
    render() {
        return (
            <div className='bgmenu flexrow clmenu'>
                <div className='gflex1 border nonebdtop nonebdbottom nonebdleft'></div>
                <div style={{ width: 1270, height: '100%' }} className='flexrow'>
                    {this.showMenus(menus)}
                    <div className='gflex1 border nonebdtop nonebdbottom'></div>
                </div>
                <div className='gflex1 border nonebdtop nonebdbottom nonebdright'></div>
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

export default Menu;
