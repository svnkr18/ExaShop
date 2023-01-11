import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import ReactStars from "react-rating-stars-component";
import autoprefixer from "autoprefixer";
import { useDispatch } from "react-redux";
import { addToBasket } from "../app/slices/basketSlice";

function Product({ id, title, price, description, category, image }) {
  const price_item = Math.round(price * 30);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product)); //sending the product as an acion to the Redux store...
  };

  return (
    <div className=" relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className=" mx-auto mb-5">
        <Image
          src={image}
          height={100}
          width={100}
          object-fit="cover"
          alt="product"
        />
      </div>
      <h4 className=" my-3 ">{title}</h4>
      <div className="flex">
        <ReactStars
          size={25}
          count={5}
          value={Math.floor(Math.random() * 5 + 1)}
          edit={false}
          activeColor="#ffd700"
        />
      </div>
      <h5 className=" mb-2 text-lg">₹ {price_item}</h5>
      <p className="text-xs mt-2 line-clamp-2 mb-5">{description}</p>
      <button onClick={addItemToBasket} className=" mt-auto button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
