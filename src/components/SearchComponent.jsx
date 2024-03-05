import React, { Component } from "react"

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm);
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex w-50">
          <input
            type="text"
            className="form-control mr-2"
            placeholder="Digite sua busca..."
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
          />
          <button
            type="button"
            className="btn-outline-custom"
            onClick={this.handleSearch}
          >
            Buscar
          </button>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
