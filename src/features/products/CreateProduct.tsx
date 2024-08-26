import React from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(-1)}
        className="btn btn-sm btn-outline m-3 place-self-start"
      >
        back
      </div>
      CreateProduct
    </>
  );
};

export default CreateProduct;
