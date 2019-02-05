import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchView from './SearchView';

export default class Search extends Component {
    static propTypes = {
        setSearchString: PropTypes.func.isRequired,
    };

    handleSearchChange = (e) => {
        this.props.setSearchString(e.target.value);
    };

    render() {
        return (
            <SearchView
                onChange={this.handleSearchChange}
            />
        );
    }
}
