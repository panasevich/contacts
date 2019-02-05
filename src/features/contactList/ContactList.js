import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import ContactItem from './ContactItem';


export default class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.oneOf(PropTypes.array).isRequired,
        activeContact: PropTypes.number.isRequired,
        setContact: PropTypes.func.isRequired,
    };

    setActiveContact = (e) => {
        this.props.setContact(e)
    };

    render() {
        const { contacts, activeContact, setActiveContact } = this.props;
        console.log(activeContact, '-=-==-=');
        return (
            <List>
                {contacts.map((item) => (
                    <ContactItem active={activeContact} setActiveItem={this.setActiveContact} id={item.id} title={item.title} key={item.id} />
                ))}
            </List>
        );
    }
}
