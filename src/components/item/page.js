import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Page = props =>
{
    const { id, descr } = props;
    const history = useHistory();

    return (
        <Card key={ id } onClick={ () => history.push('/items/' + id) }>
            <Card.Header>{ id }</Card.Header>
            <Card.Body>{ descr }</Card.Body>
        </Card>
    )
}

export default Page;