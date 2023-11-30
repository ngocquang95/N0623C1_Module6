import { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    // GIá trị khởi tạo
    this.state = {
      jobs: ["Học Java", "Học react"],
      job: "",
    };
    console.dir(this);
  }

  handleAddJob = () => {
    this.setState({jobs: [...this.state.jobs, this.state.job], job: ""})
  };

  handleChangeInput = (event) => {
    this.setState({job: event.target.value})
  };


  render() {
    return (
      <div className="container">
        <h1>ToDo list</h1>
        <input value={this.state.job} onChange={this.handleChangeInput} className="form-control" />
        <button onClick={this.handleAddJob} className="btn btn-primary">
          Thêm
        </button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name Jobs</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jobs.map((job, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{job}</td>
                <td>
                  <button
                    onClick={this.handleIncrement}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
