import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../actions/productActions";
import ProductComponent from "./ProductComponent";
const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products")
           .catch((error)=>{
            console.log(error);
        });
        console.log(response);
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    },[]);
   console.log(products);
    return(<div className="ui grid container">
        <ProductComponent/>
    </div>) 

}
export default ProductList;