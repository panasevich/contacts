import React, { Component } from 'react';
import 'assets/style/main.less';
import Sidebar from '../features/sidebar/Contacts';


export default class App extends Component {
    render() {
        return (
            <div>
                <Sidebar />
            </div>
        );
    }
}
