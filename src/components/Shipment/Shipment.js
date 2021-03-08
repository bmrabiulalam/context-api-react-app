import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div style={{border: '2px solid green', margin: '5px', padding: '5px'}}>
            <h1>Inside Shipment Category: {category}</h1>
            <button onClick={() => setCategory(category + 1)}>increase from shipment</button>
        </div>
    );
};

export default Shipment;