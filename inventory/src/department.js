import React, {Component} from 'react';
import CreateDept from './createdept'
import './inv.css'
import {connect} from "react-redux";
import {fetchDepartmentFromApi} from "./apis/fetchdata";


class Department extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dept_name: [],
            prevProps: [],
            bool: false
        };
    }

    makeTrue = () => {
        this.setState({
            bool: true
        })
    };

    componentDidMount() {
        this.props.fetchdept()
    }


    componentDidUpdate(prevProps) {
        //      if (this.state.bool === true) {
//            this.setState({bool: false});
        if (this.props.department !== this.prevProps) {
            this.props.fetchdept();
        }

        //    }
    }


    render() {
        return (
            <div>
                {/*{console.log(this.props.department)}*/}
                <h1>
                    <center>Department</center>
                </h1>
                <CreateDept changeBool={this.makeTrue}></CreateDept>
                <br/><br/>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    {this.props.department.map((x) =>
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                        </tr>
                    )}
                </table>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        department: state.dept,
        prevProps: state.dept,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchdept: () => fetchDepartmentFromApi(dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Department)