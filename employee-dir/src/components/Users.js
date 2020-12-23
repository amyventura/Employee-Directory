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
                        Employee
                    </p>
                </div>
            </div>
        </div>
    )
}

{/* <ul className="list-group">
{props.groceries.map(item => (
  <li className="list-group-item" key={item.id}>
    {item.name}
  </li>
))}
</ul> */}

export default Users;