import React, { useState } from "react";
import UseFood from "../../Hook/UseFood";
import img1 from "../../Assets/images/icons/icons8-update.gif";
import img2 from "../../Assets/images/icons/deleteIcon.png";
import "./profile.css";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";

const Profile = () => {
  const [isReload, setReload] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  const [food, setFood] = UseFood(isReload);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/food`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Products added");
        }

        const newProduct = [...food, data];
        setFood(newProduct);
      });
  };

  const deleteHandler = (id) => {
    console.log(id);
    const confirm = window.confirm("are you sure?");
    if (confirm) {
      const url = `http://localhost:5000/food/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const newFood = food.filter((foods) => foods._id !== id);
          setFood(newFood);
        });
    }
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const title = e.target.title.value;
    const img = e.target.img.value;
    const Price = e.target.price.value;
    const description = e.target.description.value;

    const productUpdate = {
      name,
      title,
      img,
      Price,
      description,
    };

    const url = `http://localhost:5000/food/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(productUpdate),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setReload(!isReload);
      });
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-center py-3">Add New Product</h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
            <input
              className="form-control p-2 my-2"
              {...register("name")}
              placeholder="Enter Category name"
            />
            <input
              className="form-control p-2 my-2"
              {...register("title")}
              placeholder="Enter title"
            />
            <input
              className="form-control p-2 my-2"
              {...register("img")}
              placeholder="Image URL"
            />
            <input
              className="form-control p-2 my-2"
              type="number"
              {...register("Price")}
              placeholder="Price"
            />
            <textarea
              className="form-control p-2 my-2"
              {...register("description")}
              placeholder="description"
              rows="3"
            />

            <input
              type="submit"
              className="w-50 d-block mx-auto mt-3 py-2 btn-danger"
              style={{ border: "none" }}
            />
          </form>
        </div>
        <h1 className="text-center py-3"> Your publish products</h1>
        <div className="row g-3">
          {food.map((foodItems) => (
            <div className="row g-3 justify-content-center align-items-center text-center">
              <div className="col-md-3">
                <img className="img-fluid w-50" src={foodItems.img} alt="" />
              </div>
              <h6 className="col-md-5">{foodItems.title}</h6>
              <div className="col-md-2">
                <button
                  onClick={() => deleteHandler(foodItems._id)}
                  style={{ border: "none" }}
                >
                  <img style={{ width: "30px" }} src={img2} alt="" />
                </button>
              </div>
              <div className="  col-md-2">
                <button
                  onClick={() => {
                    handleShow();
                    setId(foodItems._id);
                  }}
                  className="update-btn"
                >
                  <img
                    style={{ width: "30px", paddingRight: "10px" }}
                    src={img1}
                    alt=""
                  />
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="mb-3" onSubmit={updateHandler}>
            <input
              className="form-control p-2 my-2"
              placeholder="Enter Category name"
              name="name"
            />
            <input
              className="form-control p-2 my-2"
              placeholder="Enter title"
              name="title"
            />
            <input
              className="form-control p-2 my-2"
              name="img"
              placeholder="Image URL"
            />
            <input
              className="form-control p-2 my-2"
              type="number"
              placeholder="Price"
              name="price"
            />
            <textarea
              className="form-control p-2 my-2"
              placeholder="description"
              rows="3"
              name="description"
            />

            <input
              type="submit"
              className="w-50 d-block mx-auto mt-3 py-2 btn-danger"
              style={{ border: "none" }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
