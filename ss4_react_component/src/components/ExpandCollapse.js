import { Component } from "react";

class ExpandCollapse extends Component {
  constructor() {
    super();

    this.state = {
      isExpanded: false,
    };
  }

  render() {
    return (
      <>
        <h1>Giới thiệu về react</h1>
        <button
          onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}
          className="btn btn-danger"
        >
          {this.state.isExpanded ? 'Ẩn' : 'Hiển thị'}
        </button>
        {this.state.isExpanded && (
          <div>
            Lorem elit eiusmod irure magna consectetur exercitation ipsum
            ullamco consequat amet anim reprehenderit.
          </div>
        )}
      </>
    );
  }
}

export default ExpandCollapse;
