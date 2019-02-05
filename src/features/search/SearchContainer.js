import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from './Search';
import { setSearchString } from './actions';

@connect(null, { setSearchString })
export default class Example extends Component {
    static propTypes = {
        setSearchString: PropTypes.func.isRequired,
    };

    render() {
        return (
            <Search
                setSearchString={this.props.setSearchString}
            />
        );
    }
}
