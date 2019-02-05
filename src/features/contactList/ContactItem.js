import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

class ContactItem extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        setActiveItem: PropTypes.func.isRequired,
    };

    handleActiveItem = () => {
        this.props.setActiveItem(this.props.id);
    };

    render() {
        const { active, title, id } = this.props;
        return (
            <ListItem
                button
                selected={id === active}
                onClick={this.handleActiveItem}
            >
                {title}
            </ListItem>);
    }
}

export default ContactItem;
