import React from "react";

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">
                        First Name
                        </th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.length > 0?
                    props.employees.map(employee => {
                        return(
                            <tr>
                            <th scope="row"><img src={employee.picture.thumbnail} alt="employee portrait"/></th>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        </tr>
                        )
                    }) :
                    (
                        <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    )
                }
               
            </tbody>
        </table>
    )
}
export default Table;