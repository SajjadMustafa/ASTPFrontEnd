import React, {Component} from 'react';
import {fetchDepartmentFromApi, fetchEmployeeFromApi} from "./apis/fetchdata";
import {connect} from "react-redux";


class CreateEmpolyee extends Component {

    constructor(props){
        super(props)

        this.state = {
            dept_name :[],
        }
    }

    componentDidMount() {
        this.props.fetchdept()
      }



    store = (payload) => {
        fetch('http://127.0.0.1:8000/astp/all/',
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    };


    submitForm = () => {
        const form =
            {
                fullname: document.getElementById('full_name').value,
                designation: document.getElementById('designation').value,
                cnic: document.getElementById('cnic').value,
                mobile: document.getElementById('mobile_no').value,
                dept: document.getElementById('dept').value,
            };
        this.store(form);
    };

    render() {
        return (
            <div>
                <h2>
                    ADD Employee
                </h2>
                <label>Full Name</label>
                <input type="text" id={"full_name"}/>
                <label>Designation</label>
                <input type="text" id={"designation"}/>
                <label>CNIC</label>
                <input type="text" id={"cnic"}/>
                <label>Mobile No</label>
                <input type="text" id={"mobile_no"}/>

                <select name="" id="dept">
                    {this.props.department.map((x) =>
                        <option value={x.id}>{x.name}</option>
                    )}
                </select>
                <button onClick={this.submitForm}>ADD</button>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        department: state.dept,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchdept: () => fetchDepartmentFromApi(dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmpolyee)