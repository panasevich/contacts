import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import { getActiveContact } from './selectors';
import { setActiveContact } from './actions';

const contacts = [
    { 'id': 1, 'title': 'json-server1', 'author': 'typicode1' },
    { 'id': 2, 'title': 'json-server2', 'author': 'typicode2' },
    { 'id': 3, 'title': 'json-server3', 'author': 'typicode3' },
    { 'id': 4, 'title': 'json-server4', 'author': 'typicode4' },
    { 'id': 5, 'title': 'json-server5', 'author': 'typicode5' },
    { 'id': 6, 'title': 'json-server6', 'author': 'typicode6' },
    { 'id': 7, 'title': 'json-server7', 'author': 'typicode7' },
    { 'id': 8, 'title': 'json-server8', 'author': 'typicode8' },
    { 'id': 9, 'title': 'json-server9', 'author': 'typicode9' },
    { 'id': 10, 'title': 'json-server10', 'author': 'typicode10' },
    { 'id': 11, 'title': 'json-server11', 'author': 'typicode11' },
    { 'id': 12, 'title': 'json-server12', 'author': 'typicode12' },
    { 'id': 13, 'title': 'json-server13', 'author': 'typicode13' },
    { 'id': 14, 'title': 'json-server14', 'author': 'typicode14' },
    { 'id': 15, 'title': 'json-server15', 'author': 'typicode15' }
];
@connect((state) => ({
    activeContact: getActiveContact(state),
}), {
    setActiveContact,
})
class ContactListContainer extends Component {
    static propTypes = {
        activeContact: PropTypes.number,
    };

    render() {
        const { activeContact } = this.props;
        const newProps = { activeContact };
        return (
            <ContactList
                activeContact={activeContact}
                contacts={contacts}
                setContact={this.props.setActiveContact}
                {...newProps}
            />
        );
    }
}

export default ContactListContainer;
