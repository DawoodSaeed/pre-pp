import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
  const [firstItem, setFirstItem] = useState({
    name: "Briyani",
    quantity: 3,
  });

  useEffect(() => {
    setTimeout(() => {
      setFirstItem({
        ...firstItem,
        quantity: 5,
      });
    }, 3000);
  }, [firstItem]);
  return (
    <>
      <section className="bg-black text-white w-md mx-auto p-5 rounded mt-10 text-center">
        <h2 className="text-xl">Cart</h2>
        <ul>
          <MenuItem item={firstItem} />

          <MenuItem
            item={{
              name: "Chicken Handi",
              quantity: 5,
            }}
          />

          <MenuItem
            item={{
              name: "Halwa Puri",
              quantity: 1,
            }}
          />
        </ul>
      </section>
    </>
  );
};

export default Cart;
