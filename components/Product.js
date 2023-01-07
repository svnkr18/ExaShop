import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import autoprefixer from "autoprefixer";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [star] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  return (
    <div className=" relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className=" mx-auto mb-5">
        <Image src={image} height={100} width={100} object-fit="cover" />
      </div>
      <h4 className=" my-3 ">{title}</h4>
      <div className="flex">
        {Array(star)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <h5 className=" mb-2">{price * 50}</h5>
      <p className="text-xs mt-2 line-clamp-2 mb-5">{description}</p>
      <button className=" mt-auto button">Add to Cart</button>
    </div>
  );
}

export default Product;
