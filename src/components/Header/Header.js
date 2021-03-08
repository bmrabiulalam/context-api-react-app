import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Head = (props) => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div style={{border: '2px solid green', margin: '5px', padding: '5px'}}>
            <h3>Inside Header Category: {category}</h3>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Head;