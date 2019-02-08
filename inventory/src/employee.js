import React, {Component} from 'react';
import './inv.css'
import Createempolyee from './createempolyee'
import {connect} from "react-redux";
import {fetchEmployeeFromApi} from "./apis/fetchdata";

class Employee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            emp_record: [],
            prevProps: [],
        }
    }

    componentDidMount() {
        this.props.fetchemp()
    }


    componentDidUpdate(prevProps) {
        if (this.props.employee !== this.prevProps) {
            this.props.fetchemp();
        }
    }


    render() {
        return (
            <div>
                <h1>
                    <center>Employee</center>
                </h1>
                <Createempolyee/>
                <br/><br/>
                <table>
                    <tr>
                        <th>FullName</th>
                        <th>Designation</th>
                        <th>CNIC</th>
                        <th>Mobile No</th>
                        <th>Department</th>
                    </tr>
                    {this.props.employee.map((x) =>
                        <tr>
                            <td>{x.fullname}</td>
                            <td>{x.designation}</td>
                            <td>{x.cnic}</td>
                            <td>{x.mobile}</td>
                            <td>{x.deptn}</td>
                        </tr>
                    )}


                </table>


            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        employee: state.empl,
        prevProps:state.empl,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchemp: () => fetchEmployeeFromApi(dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee)