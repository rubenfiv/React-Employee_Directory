import React, { Component } from "react";
import api from "../utils/api";
import Search from "../components/search";
import Table from "../components/table";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            search: "",
        }
        // this.sortBy = this.sortBy.bind(this)
    };

    // sortBy(key) {
    //     this.setState({
    //         employees: Table.sort((a, b) => a < b)
    //     })
    // }

    componentDidMount() {
        api.getRandomPeople().then(employees => {
            this.setState({
                employees: employees.data.results
            })
        })
    };

    searchEmployee = (filter) => {
        console.log('Search', filter);
        const filteredList = this.state.employees.filter((employee) => {
            // merge data together, then check to see if employee exists
            let values = Object.values(employee).join('').toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        // Update the employee list with the filtered value
        this.setState({ employees: filteredList });
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };


    render() {
        return (
            <>

                <Search
                    value={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />

                <Table
                    employees={this.state.employees}
                    // sortBy={sortBy}
                />
            </>

        )
    }
}
export default Home;