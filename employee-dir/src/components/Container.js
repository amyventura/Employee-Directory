import React from 'react';
import Form from './Form';
import Users from './Users';
import Nav from './Nav';
import Header from './Header';
import API from '../utlis/API';

class Container extends React.Component {
    state = {
        allUsers: [],
        filteredUsers: [],
        searchTerm: ""
    }

    componentDidMount() {
        this.viewAllUsers();
    }

    // function viewAllUsers() {

    // }
    // component did mount
    // call API (utils)
    // setState
    // allUsers: [],
    // filteredUsers: [],
    // handleInputChange
    // change (setState) searchTerm
    // filter users based on searchTerm
    // sort if relevant
    // sortUsers
    // using js sort (by string, or if you want to sort by number (DOB))
    // optionally implement, up or down
    render() {
        return ( 
            <div className = "App" >
            <Nav />
            <Form />
            <Header />
            <Users />
            </div>
        );
    }
}

export default Container;