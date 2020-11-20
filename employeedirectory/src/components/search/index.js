import React from "react";
// import Table from "../table/index"

function Search(props) {
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search for an Employee:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Type in the employee's first or last name to get started!"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                        Search
        </button>
                </div>
            </form>
        </>
    );
}

export default Search;