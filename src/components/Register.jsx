import { Formik, useFormik } from "formik";
import React from "react";
import { registerSchema } from "./schema/registerSchema";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/Slices/RegisterSlice";

const Register = () => {

const dispatch = useDispatch();

// const data = useSelector((state)=> state)
// console.log("data all=>", data)

const userData = useSelector((state)=> state?.register?.users[0])
console.log("data=>", userData)

const initialValue = {
  email: userData?.email || "",
  name: userData?.name || "",
  dob: userData?.dob || "",
  gender: userData?.gender || "",
  password: "",
};

  const { values, errors, touched, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValue,
      validationSchema: registerSchema,

      onSubmit: (values, action) => {
        // console.log("value", values);
        dispatch(signIn(values))
        localStorage.setItem("userData", JSON.stringify(values))
        action.resetForm();
        alert("form submitted successfully")
      }
    });

    const handleBlur = () => {
      dispatch(signIn(values)); 
      Formik.handleBlur()
    };

  return (
    <>
      <form className="text-center w-50 m-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <div style={{ color: "red" }}>{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <div style={{ color: "red" }}>{errors.name}</div>
          )}
        </div>
        <div className="form-group">
          <label>DOB</label>
          <input
            type="date"
            className="form-control"
            placeholder="DOB"
            name="dob"
            value={values.dob}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.dob && touched.dob && (
            <div style={{ color: "red" }}>{errors.dob}</div>
          )}
        </div>
        <div className="form-group ">
          <label>Gender</label>
          <div className="form-check text-start">
            <input
              type="radio"
              id="male"
              className="form-check-input"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check text-start">
            <input
              type="radio"
              id="female"
              className="form-check-input"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>
          <div className="form-check text-start">
            <input
              type="radio"
              id="other"
              className="form-check-input"
              name="gender"
              value="other"
              checked={values.gender === "other"}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>
            {errors.gender && touched.gender && (
              <div style={{ color: "red" }}>{errors.gender}</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Register;
