import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from './Layout';
import "./ShopPage.css";




function ProductShopPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
              });
          }, []);

          if (loading) {
            return (
                 <div>Loading...</div>
                
            );
          }

          if (error) {
            return (
                    <div>Error: {error}</div>
            );
          }
    
    
    return (
        <div>
            <div className="shopHeaderDiv">
                <h4 id="shopRouteHeaderTxt">Shop &gt; All Products</h4>
                <h1 id="productHeaderTxt">All Products</h1>
            </div>
            <div className="productList">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <img src={product.imgUrl} alt={product.name}/>
                        <h2 id="productName">{product.name}</h2>
                        <p id="productDescription">{product.description}</p>
                        <p id="priceTxt">Price: ${product.price}</p>
                    </div>
                    
                ))}
            </div>
            </div>
        );
    }

    export default ProductShopPage;