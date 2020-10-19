import React from 'react';
import Page from './page';

const data =
[
    { id: 1, descr: 'Soy un producto genial' },
    { id: 2, descr: 'Soy un eficaz antiacido' },
    { id: 3, descr: 'Curo el cornavirus' },
    { id: 4, descr: 'Kike es boliviano' }
];

const Shop = () =>
{
    return <Page data={ data } />
}

export default Shop;