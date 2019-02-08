import React, {Component} from 'react';
import {storeUnit} from "./apis/storedata";


class CreateUnit  extends Component {


    submitForm = () => {
        const form =
            {
                name: document.getElementById('name').value
            };
        storeUnit(form);


    };

    render() {
        return (
            <div>
                <h2>
                    ADD Unit
                </h2>
                <input type="text" id={"name"}/>
                <button onClick={this.submitForm}>ADD</button>



            </div>
        );
    }
}

export default CreateUnit