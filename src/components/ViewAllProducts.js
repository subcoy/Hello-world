import React, {useEffect, useState} from 'react';

import '../style/index.css'
import ProductCard from '../components/ProductCard.js';

export const ViewAllProducts = () => {
 const[products,setProducts] =useState([])

    useEffect(() => {
        const getAllData = async () =>{
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const results = await response.json()
            setProducts(results)
            } catch (err){
            console.error(err)
            }
        }
    getAllData()
    },[])

    return(
        <div>
            
            {!!products.length &&
            products.map((el,id) =>{
                return(
                    <ProductCard key={id} product={el} />                
                    )
            })}
        </div>
    )
        }

       