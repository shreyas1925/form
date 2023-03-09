import React from "react";
import { useFormik } from "formik";
import "./Form.css";
import { UserSchema } from "../../schemas";
import axios from "axios";
const Form = () => {
  const initialValues = {
    username: "",
    mobile: "",
    email: "",
    gender: "",
    address: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UserSchema,
      onSubmit: (values) => {
        console.log(values);
        axios({
          method: "POST",
          url: "http://localhost:8080/user/register",
          data: values,
          // headers: { "Content-Type": "multipart/form-data" },
        });
      },
    });

  console.log(errors);

  return (
    <div className="app--form-container">
      <form action="" className="form--container" onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type="text"
          name="username"
          placeholder="Enter your name"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username ? (
          <p className="form--error">{errors.username}</p>
        ) : null}
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p className="form--error">{errors.email}</p>
        ) : null}
        <input
          autoComplete="off"
          type="number"
          name="mobile"
          placeholder="Enter your mobile number"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.mobile && touched.mobile ? (
          <p className="form--error">{errors.mobile}</p>
        ) : null}
        <div className="gender--container">
          <div className="gender">
            <input
              autoComplete="off"
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>Male</p>
          </div>
          <div className="gender">
            <input
              autoComplete="off"
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>Female</p>
          </div>
        </div>
        {errors.gender && touched.gender ? (
          <p className="form--error">{errors.gender}</p>
        ) : null}
        <textarea
          placeholder="Enter your address"
          name="address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address && touched.address ? (
          <p className="form--error">{errors.address}</p>
        ) : null}
        <input
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="form--error">{errors.password}</p>
        ) : null}
        <input
          autoComplete="off"
          type="password"
          name="confirm_password"
          placeholder="Confirm password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirm_password && touched.confirm_password ? (
          <p className="form--error">{errors.confirm_password}</p>
        ) : null}
        <button type="submit" className="button--container">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
