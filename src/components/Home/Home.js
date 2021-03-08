import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '2px solid green', margin: '5px', padding: '5px'}}>
            <h2>Inside Home Category: {category}</h2>
            <Category></Category>
        </div>
    );
};

export default Home;