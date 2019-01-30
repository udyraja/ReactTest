import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Firstname: '',
            Lastname: '',
            Address: '',
            Contact: '',
            Birthday: '',
            Email: ''
        }
    }
    onChangeFirstname(e) {
        this.setState({
            Firstname: e.target.value
        });
    }
    onChangeLastname(e) {
        this.setState({
            Lastname: e.target.value
        })
    }
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        })
    }
    onChangeContact(e) {
        this.setState({
            Contact: e.target.value
        });
    }
    onChangeBirthday(e) {
        this.setState({
            Birthday: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Address: this.state.Address,
            Contact: this.state.Contact,
            Birthday: this.state.Birthday,
            Email: this.state.Email
        };
        axios.post('http://localhost:4000/user/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            Firstname: '',
            Lastname: '',
            Address: '',
            Contact: '',
            Birthday: '',
            Email: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Firstname}
                            onChange={this.onChangeFirstname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Lastname}
                               onChange={this.onChangeLastname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Address}
                               onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Contact}
                               onChange={this.onChangeContact}
                        />
                    </div>
                    <div className="form-group">
                        <label>Birthday: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Birthday}
                               onChange={this.onChangeBirthday}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Email}
                               onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}