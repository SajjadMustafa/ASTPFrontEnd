import React, {Component} from 'react';
import {storeIssuanceRecord} from "./apis/storedata";
import {connect} from "react-redux";
import {fetchEmployeeFromApi, fetchItemFromApi, fetchUserFromApi} from "./apis/fetchdata";


class CreateIssuanceRecord extends Component {

    submitForm = () => {
        const form =
            {
                req_name: document.getElementById('req_name').value,
                emp: document.getElementById('emp').value,
                item: document.getElementById('item').value,
                quantity: document.getElementById('quantity').value,

            };
        storeIssuanceRecord(form);
    };

    componentDidMount() {
        this.props.fetchuser();
        this.props.fetchemp();
        this.props.fetchitem();
    }


    render() {
        return (
            <div>
                <h2>Issue Item</h2>
                <label>Request From</label>
                <select id={'req_name'}>
                    {this.props.user.map((x) =>
                        <option value={x.id}>{x.Emp}</option>
                    )}
                </select>
                <label>Issue To</label>
                <select id={'emp'}>
                    {this.props.employee.map((x) =>
                        <option value={x.id}>{x.fullname}</option>
                    )}
                </select>
                <label>Item Name</label>
                <select id={'item'}>
                    {this.props.item.map((x) =>
                        <option value={x.id}>{x.iname}</option>
                    )}
                </select>

                <label>Quantity</label>
                <input type="text" id={'quantity'}/>


                <button onClick={this.submitForm}>Add</button>


            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        employee: state.empl,
        item: state.item,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchuser: () => fetchUserFromApi(dispatch),
        fetchemp: () => fetchEmployeeFromApi(dispatch),
        fetchitem: () => fetchItemFromApi(dispatch),


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateIssuanceRecord)


