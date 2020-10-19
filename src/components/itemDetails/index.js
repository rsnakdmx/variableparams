import React from 'react';
import Page from './page';

const ItemDetails = props =>
{
    return <Page id={ props.match.params.id } />;
}

export default ItemDetails;