import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems } from "../app/slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-200">
      <Header />
      <main className=" lg:flex max-w-screen-2xl mx-auto">
        {/* left section */}
        <div className=" flex-grow m-5 shadow-md">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className=" text-3xl border-b  pb-4">
              {items.length === 0
                ? "Your basket is empty, add item to basket"
                : `Shopping basket ${
                    items.length > 1
                      ? `(${items.length} items)`
                      : `(${items.length} item)`
                  } `}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/* right section */}
      </main>
    </div>
  );
}

export default Checkout;
