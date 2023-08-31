import React from 'react';
import IMG from "../../images/img01.jpg"

export const ProductsList = () => {
    return (
        <>
        <h1 className="title"> PRODUCTS</h1>
            <div className="products">
                <a href="#">
                    <div className="product">
                        <img src={IMG} alt=""/>
                    </div>
                </a>

                <div className="product-footer">
                    <h1>Title</h1>
                    <p>Category</p>
                    <p className="price">$320</p>
                </div>
                <div className="buttom">
                    <button className="btn">
                        Add in the Cart
                    </button>
                    <div>
                        <a href="#" className="btn">View</a>
                    </div>

                </div>

            
            </div>
        </>
    );
}


