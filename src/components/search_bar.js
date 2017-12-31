import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
        };
    }

    handleChange(e) {
        this.setState({
            searchTerm: e.target.value,
        });
    }

    handleSubmit(e) {
        this.props.searchForTerm(this.state.searchTerm);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="search-bar-contents">
                        <input
                            type="text"
                            className="form-control search-bar-input"
                            value={this.state.searchTerm}
                            onChange={this.handleChange.bind(this)}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary mtb-3"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;