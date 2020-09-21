import React, { Component } from 'react';
import './App.css';
import Menu from './../Menu/Menu';
import routes from './../Route/routes';
import { Switch, Route,HashRouter } from 'react-router-dom';
import TopMenu from './../TopMenu/TopMenu';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div >
                    <TopMenu/>
                    <Menu />
                    {this.showContentMenus(routes)}
                </div>
            </HashRouter>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
