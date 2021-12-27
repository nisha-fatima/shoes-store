import React from 'react';
import { Link } from 'react-router-dom';
import shoes from './../shoes.json'


function Product() {

    console.log(shoes)
    //   console.log(Object.keys(shoes))
    return (
        <div>
            <h1>Welcome to Product</h1>
            <div className='productContainer'>
                {Object.keys(shoes).map(keyName => {
                    const shoe = shoes[keyName];
                    return (
                        <Link key={keyName} className='link' to={`/product/${keyName}`} >
                            <h4>{shoe.name}</h4>
                            <img src={shoe.img} height={150} />
                        </Link>)
                })}
            </div>
        </div>
    );
}

export default Product;
