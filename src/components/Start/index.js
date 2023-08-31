import React from 'react';
import { Link } from 'react-router-dom';


export const Start = () => {
    return (
        <div>
            <Link to="/">
                <h1>INICIO</h1>
            </Link>

            <Link to="/products">
                <h1>Productos</h1>
            </Link>
        </div>
    );
}

