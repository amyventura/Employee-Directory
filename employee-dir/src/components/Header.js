import React from 'react';

function Header() {
    return(
        <table className ='table table-light'> 
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>   
        </table>
        
    )
};

export default Header;