import React, {Component} from 'react';
import Navbar from './navbar'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Department from './department'
import Employee from './employee'
import StockEntry from './stockentry'
import Unit from './unit'
import Item from './item'
import IssuanceRecord from './issuancerecord'
import User from './user'

class URLS extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar></Navbar>
                    <Switch>
                        <Route path={"/department"} component={Department}></Route>
                        <Route path={"/employee"} component={Employee}></Route>
                        <Route path={"/stockentry"} component={StockEntry}></Route>
                        <Route path={"/unit"} component={Unit}></Route>
                        <Route path={"/item"} component={Item}></Route>
                        <Route path={"/ir"} component={IssuanceRecord}></Route>
                        <Route path={"/user"} component={User}></Route>

                    </Switch>
                </div>
            </BrowserRouter>

        );
    }

}

export default URLS;
