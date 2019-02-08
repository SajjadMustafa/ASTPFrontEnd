import React, { Component } from 'react';
import {storeStockEntry} from "./apis/storedata";


class CreateStockEntry extends Component {

    submitForm = () => {
        const form =
            {
                is_po_or_pettycash: document.getElementById('is_po_or_pettycash').value,
                po_number: document.getElementById('po_number').value,
                scanner_id: 'abc',
                po_company: document.getElementById('po_company').value,
                date: document.getElementById('date').value,
                invoice_no: document.getElementById('invoice_no').value,

            };
        storeStockEntry(form);
    };


    render() {
        return (
            <div>
                <h2>Add Stock Entry</h2>
                <label>Purchase Order or PettyCash</label>
                <input type="radio" id={"is_po_or_pettycash"} value="Purchase Order"/>Purchase Order
                <input type="radio" id={"is_po_or_pettycash"} value="PettyCash"/>PettyCash<br/>
                    <label>Purchase Order Number</label>
                    <input type="text" id={'po_number'}/>
                    <label>Company Name</label>
                    <input type="text" id={'po_company'}/>
                    <label>Purchase Order Number</label>
                    <input type="text" id={'po_number'}/><br/>
                    <label>Date</label>
                    <input type="date" id={'date'}/>
                    <label>Invoice No</label>
                    <input type="text" id={'invoice_no'}/>
                    <button onClick={this.submitForm}>Add</button>



            </div>
        );
    }

}

export default CreateStockEntry;


