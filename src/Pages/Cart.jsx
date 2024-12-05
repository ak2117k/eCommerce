import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Storee/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const CartProducts = useSelector((state) => state.cart);
  console.log(CartProducts);
  const handleDelete = (product) => {
    dispatch(remove(product.id));
  };
  return (
    <div>
      {CartProducts.map((product) => (
        <div className="row" key={product.id}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="text-center">
              <img
                className="card-img-top"
                src={product.image1}
                alt="Card image cap"
                style={{ width: "130px", height: "100px" }}
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">{product.info}</h5>
              <p className="card-text">{product.price}</p>
            </div>
            <button
              className="btn btn-primary"
              variant="danger"
              onClick={() => handleDelete(product)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
