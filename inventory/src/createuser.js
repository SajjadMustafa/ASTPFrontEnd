import React, {Component} from 'react';
import {storeUser} from "./apis/storedata";
import {connect} from "react-redux";
import {fetchDepartmentFromApi, fetchEmployeeFromApi} from "./apis/fetchdata";


class CreateUser extends Component {

    submitForm = () => {
        const form =
            {
                dept: document.getElementById('dept').value,
                Emp: document.getElementById('Emp').value,
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,

            };
        alert(form.Emp)
        storeUser(form);
    };

    componentDidMount() {
        this.props.fetchemp();
        this.props.fetchdept();
    }


    render() {
        return (
            <div>
                <h2>Add User</h2>

                <label>Department </label>
                <select id={'dept'}>
                    {this.props.department.map((x) =>
                        <option value={x.id}>{x.name}</option>
                    )}
                </select>

                <label>Employee</label>
                <select id={'Emp'}>
                    {this.props.employee.map((x) =>
                        <option value={x.id}>{x.fullname}</option>
                    )}
                </select>

                <label>User Name </label>
                <input type="text" id={'username'}/>

                <label>Password</label>
                <input type="password" id={'password'}/>


                <button onClick={this.submitForm}>Add</button>


            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        employee: state.empl,
        department: state.dept,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchemp: () => fetchEmployeeFromApi(dispatch),
        fetchdept: () => fetchDepartmentFromApi(dispatch),


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)


