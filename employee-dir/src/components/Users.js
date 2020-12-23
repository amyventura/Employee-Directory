import React from 'react';

function Users(props) {
    // props: users (filteredUsers)
    // button to filter by name 
    // onClick -> this.sortUsers
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">
                        <ul>
                            <li>Employee:</li>
                            <li>picture</li>
                            <li>name</li>
                            <li>DOB</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
    
}

export default Users;