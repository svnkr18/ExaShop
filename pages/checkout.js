import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../app/slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const total_price = Math.round(total * 30);
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
        <div className=" flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className=" whitespace-nowrap">
                Subtotal ({items.length} items)
                <span> ₹ {total_price}</span>
              </h2>
              <button
                disabled={!session}
                className={` button mt-2 ${
                  !session &&
                  `from-gray-400 to-gray-300 text-gray-200 cursor-not-allowed`
                }`}
              >
                {!session ? "Sign In to checkout" : "proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
