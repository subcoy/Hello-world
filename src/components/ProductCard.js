import React from 'react';
import '../style/index.css'
import {ViewAllProducts} from './ViewAllProducts';

const ProductCard = ({product}) => {
    return (
        
            <div className="products">
                <div className='product'> 
                    <div className='image_product'>
                        <a href="#">
                            <img  src={`${product.image}` } alt={`${product.description}` }/>
                        </a>  
                    </div>
                    <div className='product_footer'>
                     
                            <h1 >{product.title}</h1>
                            <p >Category={product.category} $</p>
                            <p className='price'>Price={product.price} $</p>
                 
                            <div className='buttom'>
                                <buttom className="ADD">ADD </buttom>
                                <div>
                                    <a href='#' className='btn'>VIEW</a>
                                </div>
                    </div>
                </div>

                </div>
           </div>
     

    );
}

export default ProductCard;

/*
"id": 10,
		"title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
		"price": 109,
		"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
		"category": "electronics",
		"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        */