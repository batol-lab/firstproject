import React from "react";
import { ProductCardProps } from "../_type/product-card.type";

const productCard = (props: ProductCardProps) => {
  return (
    <div className="product-card">
      <img className="product-image" src={props.thumbnail} alt="" />

      <p className="product-title">{props.title}</p>

      <p className="product-description">{props.description}</p>

      <p className="product-price">${props.price}</p>

      <p className="product-rating">⭐ {props.rating}</p>
    </div>
  );
};

export default productCard;
