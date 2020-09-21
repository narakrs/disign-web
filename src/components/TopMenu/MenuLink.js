import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './../Menu/menu.css';
import RowMenus from './RowMenus';
import './topmenu.css';
export default class MenuLink extends Component {
    constructor(props){
        super(props);
        this.state={
            isShow:false
        }
    }
    render() {
        const { to, activeOnlyWhenExact, label, icon, list } = this.props;
        const {isShow}= this.state;
        return (
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={({ match }) => {
                    if (list === null) {
                        var active = match ? 'sssss' : '';
                        return (
                            <Link className={`flexend menutop ${active} fwhight`}
                                to={to} style={{ textDecoration: 'none', color: 'white' }}>
                                {label}<span className={`${icon} icfmn pdl05`}></span>
                            </Link>
                        );
                    }
                    else {
                        return (
                            <div className={`flexend menutop ${active} fwhight`}
                                to={to} style={{ textDecoration: 'none', color: 'white' }}
                                onMouseMove={()=>this.setState({isShow:true})}
                                onMouseLeave={()=>this.setState({isShow:false})}
                            >{label}<span className={`${icon} icfmn pdl05`}></span>
                            {
                                isShow? <RowMenus list={list} ></RowMenus>:null
                            }
                            </div>
                        );
                    }

                }}
            />
        );
    }
}
