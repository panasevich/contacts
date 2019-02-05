import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import 'assets/style/main.less';
import ContactsContainer from '../features/contacts/ContactsContainer';


export default class App extends Component {
    render() {
        return (
            <div>
                <ContactsContainer />
            </div>
        );
    }
}
