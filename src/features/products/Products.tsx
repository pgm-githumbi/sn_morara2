import React from "react";

const Products = () => {
  return (
    <>
      Products for buyers
      <div className="sticky">Cart items: 0</div>
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap justify-center">
          {Array.from({ length: 40 }, (_, index) => (
            <div className="card bg-base-100 w-64 m-3 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Product!</h2>
                <p>Latest Mtumba from China</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => alert("added to cart")}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
