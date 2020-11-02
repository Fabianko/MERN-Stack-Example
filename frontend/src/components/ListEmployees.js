import React, { Component } from "react";
import axios from "axios";

export default class ListEmployees extends Component {
  URL_API_EMPLOYEES = "http://localhost:4000/api/employees";
  state = {
    employees: [],
  };

  async componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const res = await axios.get(this.URL_API_EMPLOYEES);
    console.log(res.data);
    this.setState({ employees: res.data });
  };

  render() {
    return (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>office</th>
                <th>position</th>
                <th>salary</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.office}</td>
                    <td>{user.position}</td>
                    <td>{user.salary}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    );
  }
}
