import React, {Component} from 'react';
import './inv.css'
import {fetchItemFromApi} from "./apis/fetchdata";
import {connect} from "react-redux";
import CreateItem from './createitem'

class Employee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            item: [],
            prevProps:[],
        }
    }

    componentDidMount() {
       this.props.fetchitem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== this.prevProps) {
            this.props.fetchitem();
        }
    }



    render() {
        return (
            <div>
                <h1>
                    <center>Item</center>
                </h1>
                <CreateItem></CreateItem><br/><br/>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Department</th>
                        <th>Stock Entry</th>
                    </tr>
                    {this.props.item.map((x) =>
                        <tr>
                            <td>{x.iname}</td>
                            <td>{x.iquantity}</td>
                            <td>{x.conunit}</td>
                            <td>{x.condept}</td>
                            <td>{x.conse}</td>
                        </tr>
                    )}

                </table>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        item:state.item,
        prevProps:state.item,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
      fetchitem :()=> fetchItemFromApi(dispatch)
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(Employee)