import React from 'react';
import Page from './page';

const Item = props =>
{
    const { id, descr } = props;

    return <Page id={ id } descr={ descr } />;
}

export default Item;