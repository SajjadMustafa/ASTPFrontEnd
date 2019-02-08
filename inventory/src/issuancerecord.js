import React, {Component} from 'react';
import './inv.css'
import {fetchIssuanceRecordFromApi} from "./apis/fetchdata";
import {connect} from "react-redux";
import CreateIssuanceRecord from './createissuancerecord'


class IssuanceRecord extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ir: [],
        }
    }


    componentDidMount() {
        this.props.fetchir()
    }

    render() {
        return (
            <div>
                <h1>
                    <center>Issuance Record</center>
                </h1>
                <CreateIssuanceRecord></CreateIssuanceRecord><br/><br/>
                <table>
                    <tr>
                        <th>Request From</th>
                        <th>Issue To</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                    </tr>

                    {this.props.ir.map((x) =>

                        <tr>
                            <td>{x.conreq_name}</td>
                            <td>{x.conemp}</td>
                            <td>{x.conitem}</td>
                            <td>{x.quantity}</td>
                        </tr>
                    )}

                </table>

            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        ir: state.ir
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchir: () => fetchIssuanceRecordFromApi(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuanceRecord);



