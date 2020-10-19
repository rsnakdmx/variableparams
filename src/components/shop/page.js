import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Item from '../item/index';

const Page = props =>
{
    const { data } = props;

    return (
        <Container>
            <Row>
                { data.map((data, key) =>
                    <Col key={ key } md={ 4 }>
                        <Item id={ data.id } descr={ data.descr } />
                    </Col>
                )}
            </Row>
        </Container>
    ); 
}

export default Page;