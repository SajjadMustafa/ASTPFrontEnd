import React, {Component} from 'react';
import {storeItem} from "./apis/storedata";
import {fetchDepartmentFromApi, fetchStocEntryFromApi, fetchUnitFromApi} from "./apis/fetchdata";
import {connect} from "react-redux";


class CreateItem extends Component {

    submitForm = () => {
        const form =
            {
                iname: document.getElementById('iname').value,
                iunit: document.getElementById('iunit').value,
                ise: document.getElementById('ise').value,
                iquantity: document.getElementById('iquantity').value,
                idept: document.getElementById('idept').value,

            };
        storeItem(form);
    };

    componentDidMount() {
        this.props.fetchstockentry();
        this.props.fetchdept();
        this.props.fetchunit();
    }


    render() {
        return (
            <div>
                <h2>Add Stock Entry</h2>
                <label>Stock Entry</label>
                <select id={'ise'}>
                    {this.props.stock_entry.map((x) =>
                        <option value={x.id}>{x.po_number}</option>
                    )}
                </select>
                <label>Department</label>
                <select id={'idept'}>
                    {this.props.department.map((x) =>
                        <option value={x.id}>{x.name}</option>
                    )}
                </select>
                <label>Item Name</label>
                <input type="text" id={'iname'}/>
                <label>Department</label>
                <select id={'iunit'}>
                    {this.props.unit.map((x) =>
                        <option value={x.id}>{x.name}</option>
                    )}
                </select>
                <label>Quantity</label>
                <input type="text" id={'iquantity'}/>


                <button onClick={this.submitForm}>Add</button>


            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        stock_entry: state.stock_entry,
        department: state.dept,
        unit: state.unit,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchstockentry: () => fetchStocEntryFromApi(dispatch),
        fetchdept: () => fetchDepartmentFromApi(dispatch),
        fetchunit: () => fetchUnitFromApi(dispatch),


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem)


