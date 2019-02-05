import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { getData } from '../../api';

export default class Example extends Component {
    componentDidMount() {
        console.log(getData('contacts'));
    }
    render() {
        return (
            <ListGroup>

            </ListGroup>
        );
    }
}
