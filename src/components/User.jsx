import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/Slices/UserSlice";

const User = () => {
  const prevData = useSelector((state) => state.user.users[0]);
  console.log(prevData);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    setTimeout(() => {
      dispatch(addUser(formData));
    }, 0);

    setFormData({
      name: "",
      age: "",
      city: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-3 p-4 ">
        <div className="form-group mb-4 ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default User;
