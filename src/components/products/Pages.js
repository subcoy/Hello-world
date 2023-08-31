import React from "react";
import { ViewAllProducts } from "../ViewAllProducts";
import {Start} from '../Start/index';
import { Route,Routes, Router } from "react-router-dom";
import ProductCard from "../ProductCard";


    
export const Pages =() => {
    return (
        <section>   
            <Routes >
                <Route path="/" exact component={<Start/>} />
                <Route path="/products" exact component={<ViewAllProducts/>} />
            </Routes>            
        </section>
    );
}