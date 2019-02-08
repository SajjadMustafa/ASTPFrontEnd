import React,{ Component } from 'react';
import './inv.css'
import {connect} from "react-redux";
import {fetchUnitFromApi} from "./apis/fetchdata";
import CreateUnit from "./createunit"


class Unit extends Component{
    constructor(props){
        super(props)

        this.state = {
            unit_name : [],
            prevProps:[]
        }
    }

    componentDidMount() {

        this.props.fetchunit()

    }

    componentDidUpdate(prevProps) {
        if (this.props.unit !== this.prevProps) {
            this.props.fetchunit();
        }
    }

    render() {
        return (
            <div>
                <h1><center>Unit</center></h1>
                {console.log(this.props.unit)}
                <CreateUnit></CreateUnit><br/><br/>
                <table>
                    <tr>
                        <th>Name</th>
                    </tr>
                    {this.props.unit.map((x) =>
                        <tr>
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
        unit: state.unit,
        prevProps : state.unit,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchunit: () => fetchUnitFromApi(dispatch)

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Unit)