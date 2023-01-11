import Image from "next/image";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../app/slices/basketSlice";

function CheckoutProduct({ id, title, price, image, description }) {
  const price_item = Math.round(price * 30);

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      image,
      description,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} object-fit="contain" />
      <div className=" col-span-3 mx-5">
        <h3 className=" my-3">{title}</h3>
        <h4 className=" mb-2 text-lg">₹ {price_item}</h4>
        <ReactStars
          size={25}
          count={5}
          value={Math.floor(Math.random() * 5 + 1)}
          edit={false}
          activeColor="#ffd700"
        />
        <p className="text-xs my-2 line-clamp-2">{description}</p>
      </div>
      <div className=" flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          {" "}
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
