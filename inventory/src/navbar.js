import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink to={"/department"}><button>Department</button></NavLink>
                <NavLink to={"/employee"}><button>Employee</button></NavLink>
                <NavLink to={"/stockentry"}><button>StockEntry</button></NavLink>
                <NavLink to={"/unit"}><button>Unit</button></NavLink>
                <NavLink to={"/item"}><button>Item</button></NavLink>
                <NavLink to={"/ir"}><button>Issuance Record</button></NavLink>
                <NavLink to={"/user"}><button>User</button></NavLink>


            </div>
        );
    }
}

export default Navbar;
