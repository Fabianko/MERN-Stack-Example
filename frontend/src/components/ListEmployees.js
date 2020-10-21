import React, { Component } from 'react';
import axios from 'axios';

export default class ListEmployees extends Component {
    URL_API_EMPLOYEES = 'http://localhost:4000/api/employees';
    state = {
        employees: []
    }

    async componentDidMount() {
        this.getEmployees();
    }

    getEmployees = async () => {
        const res = await axios.get(this.URL_API_EMPLOYEES);
        console.log(res.data)
        this.setState({ employees: res.data});
    }

    render() {
        return (
            <div> Listar empleados</div>
            )
    }
}