import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const items = { name, price, category, company, userId };
    let result;
    await axios
      .post("http://localhost:5000/add-product", items)
      .then((res) => {
        result = res.data;
        alert("added succcesfully");
      })
      .catch((err) => {
        console.log(err);
      });

    console.warn(result);
    navigate("/");
  };
  return (
    <div className="product">
      <h1>Add product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="invalid_input">Enter valid name</span>
      )}
      <input
        type="text"
        placeholder="Enter product price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && (
        <span className="invalid_input">Enter valid price</span>
      )}
      <input
        type="text"
        placeholder="Enter product category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && (
        <span className="invalid_input">Enter valid category</span>
      )}
      <input
        type="text"
        placeholder="Enter product company"
        className="inputbox"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error && !company && (
        <span className="invalid_input">Enter valid company</span>
      )}
      <button onClick={addProduct} className="appbutton">
        Add Product
      </button>
    </div>
  );
};
export default AddProduct;
