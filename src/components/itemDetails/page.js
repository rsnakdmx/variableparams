import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ItemDetails = props =>
{
    const history = useHistory();
    const { id } = props;

    console.log(id);

    return(
        <Container>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed malesuada interdum facilisis. Cras molestie iaculis augue, 
                id eleifend lorem interdum ut. Morbi sed posuere augue, posuere 
                luctus tortor. Quisque sed orci et nisi volutpat luctus. 
                Phasellus non odio ipsum. Integer malesuada nisi eget nisi aliquet, 
                in efficitur est ullamcorper. Aenean dignissim dui leo, quis consectetur 
                ex porta et. Vestibulum tempus sit amet sem bibendum tincidunt. Integer 
                lorem arcu, pulvinar eget enim eu, ullamcorper sodales dui. Suspendisse 
                pellentesque lorem quis tortor eleifend luctus.
            </p>
            <Button variant="dark" onClick={ () => history.goBack() }>
                Regresar
            </Button>
        </Container>
    );
}

export default ItemDetails;