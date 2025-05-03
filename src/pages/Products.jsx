import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";

const Products = ({setCartList}) => {
    const [productList, setProductList] = useState([]);

    const fetchProducts = async () => {

        try {
            const response = await fetch('https://fakestoreapi.com/products');

            if (!response.ok) {
                throw new Error('Failed to fetch characters');
            }

            const data = await response.json();
            if (data.Response === 'False') {
                return;
            }

            if (data) {
                let productsArr = data.map((product) => ({
                    ...product,
                    inCart: false,
                }));
                setProductList(productsArr);
            }
    
        } catch (error) {
            console.error(`Error fetching characters: ${error}`)
        } 
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <>
            <h1>Find Your Style</h1>
            
            {productList.map((product) => (
                <ProductCard product={product} setCartList={setCartList} key={product.id} />
            ))}
          
        </>
        
    )
}

export default Products