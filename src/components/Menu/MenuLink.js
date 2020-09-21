import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './menu.css';
import RowMenus from './RowMenus';
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
                            <Link className={`menu border nonebdtop nonebdbottom ${active}`}
                                to={to} style={{ textDecoration: 'none', color: 'white' }}>
                                <span className={`pdlr2 ${icon} icfmn`}></span>{label}
                            </Link>
                        );
                    }
                    else {
                        return (
                            <div className={`menu border nonebdtop nonebdbottom ${active}`}
                                to={to} style={{ textDecoration: 'none', color: 'white' }}
                                onMouseMove={()=>this.setState({isShow:true})}
                                onMouseLeave={()=>this.setState({isShow:false})}
                            ><span className={`pdlr2 ${icon} icfmn`}></span>{label}
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
