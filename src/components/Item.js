import React, {useState} from "react";

function Item({ name, category }) {
  const[InCart, setInCart]= useState(false)

  const  toggleCart=()=>{
    setInCart(prevInCart => !prevInCart)
  }
  return (
    <li className={InCart ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart} className="add">{InCart ? 'Remove from cart': 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
