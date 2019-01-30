import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/user/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.Firstname}
                </td>
                <td>
                    {this.props.obj.Lastname}
                </td>
                <td>
                    {this.props.obj.Address}
                </td>
                <td>
                    {this.props.obj.Contact}
                </td>
                <td>
                    {this.props.obj.Birthday}
                </td>
                <td>
                    {this.props.obj.Email}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;