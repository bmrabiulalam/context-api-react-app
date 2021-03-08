import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    return (
        <div style={{border: '2px solid green', margin: '5px', padding: '5px'}}>
            <h2>Inside Category Detail Name: {props.product.name}</h2>
            <h2>Inside Category Detail Category: {props.product.category}</h2>
        </div>
    );
};

export default CategoryDetail;