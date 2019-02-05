import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';

function SearchView(props) {
    return (
        <Input onChange={props.onChange} />
    );
}

SearchView.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchView;
