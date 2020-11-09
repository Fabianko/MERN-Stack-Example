import React, { Component } from "react";
import axios from "axios";

export default class CreateEmployee extends Component {
  state = {
    selectedEmployee : {}
  };

  resetForm = () => {
    console.log(this.state)
    this.setState({ selectedEmployee: {} });
    //this.render();
  };

  createEMployee = async () => {
    console.log(this.getState().selectedEmployee);
    //const res = await axios.post(this.URL_API_EMPLOYEES, this.getState().selectedEmployee);
    //console.log(res.data);
    //this.getEmployees();
  }


  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h1>Formulario</h1>
          <form onSubmit={this.createEMployee}>
            <input type="hidden" name="_id" value={this.state.selectedEmployee._id} />

            <div className="form-group">
              <input
                type="text"
                name="name"
                value={this.state.selectedEmployee.name}
                placeholder="Enter your FullName"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <div className="input-field col-s12">
                <input
                  type="text"
                  name="position"
                  value={this.state.selectedEmployee.position}
                  placeholder="Enter your Position"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="office"
                value={this.state.selectedEmployee.office}
                placeholder="Enter your Office"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <div className="input-field col-s12">
                <input
                  type="number"
                  name="salary"
                  value={this.state.selectedEmployee.salary}
                  placeholder="Enter your Salary"
                  className="form-control"
                />
              </div>
            </div>

            <button
              className="btn btn-primary mr-2"
              onClick={this.resetForm}
            >
              Clean
            </button>
            <button type="submit"
              className="btn btn-secondary">
                Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
