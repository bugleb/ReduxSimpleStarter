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
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        onChange={this.handleChange.bind(this)}
                        type='text'
                        value={this.state.searchTerm}
                    />
                    <input type='submit' value='Search' />
                </form>
            </div>
        );
    }
}

export default SearchBar;