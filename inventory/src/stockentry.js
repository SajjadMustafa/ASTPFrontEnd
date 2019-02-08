import React, { Component } from 'react';
import './inv.css'
import {fetchStocEntryFromApi} from "./apis/fetchdata";
import {connect} from "react-redux";
import CreateStockEntry from "./createstockentry"

class StockEntry extends Component{
    constructor(props){
        super(props)

        this.state = {
            stock_entry : [],
            prevProps: [],

        }
    }


    componentDidMount() {
       this.props.fetchstockentry()
    }



    componentDidUpdate(prevProps) {
        if (this.props.stock_entry !== this.prevProps) {
            this.props.fetchstockentry();
        }
    }



    render() {
        return(
            <div>
                <h1><center>Stock Entry</center></h1>
                {console.log(this.props.stock_entry)}
                <CreateStockEntry></CreateStockEntry><br/><br/>
                <table>
                    <tr>
                        <th>PO or PettyCash</th>
                        <th>PO Number</th>
                        <th>PO Company</th>
                        <th>Date</th>
                        <th>Invoice No</th>
                    </tr>

                    {this.props.stock_entry.map((x) =>

                        <tr>
                            <td>{x.is_po_or_pettycash}</td>
                            <td>{x.po_number}</td>
                            <td>{x.po_company}</td>
                            <td>{x.date}</td>
                            <td>{x.invoice_no}</td>
                        </tr>
                    )}

                </table>

            </div>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        stock_entry: state.stock_entry,
        prevProps: state.stock_entry,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchstockentry: () => fetchStocEntryFromApi(dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StockEntry)
