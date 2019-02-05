import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

function ContactItemView (props) {
    return (<ListGroupItem tag="button" active={props.active} action>{props.name}</ListGroupItem>);
}

ContactItemView.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};

export default ContactItemView;
