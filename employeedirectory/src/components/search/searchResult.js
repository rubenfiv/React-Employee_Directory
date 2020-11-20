import React from "react";

function Result(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.results.map(result => {
                        return(
                            <tr>
                            <th scope="row"><img src={result.picture.thumbnail}/></th>
                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        </tr>
                        )
                    }) 
                }
               
            </tbody>
        </table>
    )
}
export default Result;