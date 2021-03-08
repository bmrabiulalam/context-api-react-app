import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name: 'HP', category: 'laptop'}, {name: 'Dell', category: 'laptop'}, {name: 'Asus', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'}, {name: 'Nokia', category: 'mobile'}, {name: 'Oppo', category: 'mobile'},
    {name: 'Canon', category: 'camera'}, {name: 'Nikkon', category: 'camera'}, {name: 'Sony', category: 'camera'},
]

const Category = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    return (
        <div style={{border: '2px solid green', margin: '5px', padding: '5px'}}>
            <h1>Select Your Category: {category}</h1>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }            
        </div>
    );
};

export default Category;