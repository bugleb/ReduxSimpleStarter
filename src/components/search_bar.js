import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        };
    }
    
    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    handleSubmit(e) {
        console.log(this.state.inputValue);
        this.setState({
            inputValue: '',
        });
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        onChange={this.handleChange.bind(this)}
                        type='text'
                        value={this.state.inputValue}
                    />
                    <input type='submit' value='Search' />
                </form>
            </div>
        );
    }
}

export default SearchBar;