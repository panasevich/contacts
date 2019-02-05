import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import SearchContainer from '../search/SearchContainer';
import ContactListContainer from '../contactList/ContactListContainer';


export default class ContactsWrapper extends Component {
    render() {
        return (
            <Drawer anchor="right" open>
                <SearchContainer />
                <ContactListContainer />
            </Drawer>
        );
    }
}
