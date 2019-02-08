import React, {Component} from 'react';
import './inv.css'
import {fetchUserFromApi} from "./apis/fetchdata";
import {connect} from "react-redux";
import CreateUser from "./createuser"

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_record: [],
        }
    }


    componentDidMount() {
       this.props.fetchuser()
    }

    render() {
        return (
            <div>
                <h1>
                    <center>User</center>
                </h1>
                <CreateUser></CreateUser><br/><br/>
                <table>
                    <tr>
                        <th>Department Name</th>
                        <th>Employee Name</th>
                        <th>User Name</th>
                        <th>Password</th>
                    </tr>

                    {this.props.user.map((x) =>

                        <tr>
                            <td>{x.dept}</td>
                            <td>{x.Emp}</td>
                            <td>{x.username}</td>
                            <td>{x.password}</td>
                        </tr>
                    )}

                </table>

            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchuser: () => fetchUserFromApi(dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(User)




