import React, {Component} from 'react';
import {storeDept} from "./apis/storedata";


class CreateDept  extends Component {
    constructor(props){
        super(props);

    }

    submitForm = () => {
        const form =
            {
                name: document.getElementById('name').value
            };
        storeDept(form);
        this.props.changeBool();
    };



    render() {
        return (
            <div>
                <h2>
                    ADD Department
                </h2>
                <input type="text" id={"name"}/>
                <button onClick={this.submitForm}>ADD</button>



            </div>
        );
    }
}


export default CreateDept