import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/products/${params.id}`);
    result = await result.json();
    // console.warn(result)
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };
  const UpdateProduct = async () => {
    console.warn(name, price, company, category);
    let result = await fetch(`http://localhost:5000/products/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, company, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
  };
  return (
    <div className="product">
      <h1>Update product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Enter product company"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />

      <button onClick={UpdateProduct} className="appbutton">
        Update Product
      </button>
    </div>
  );
};
export default UpdateProduct;
