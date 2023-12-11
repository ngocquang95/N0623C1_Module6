import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const StudentCreation = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values) => {
        axios
          .post("http://localhost:3001/students", values)
          .then(function (response) {
            console.log(response);
            Swal.fire({
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });

            navigate("/student");
          })
          .catch(function (error) {
            console.log(error);
          });
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" type="text" />
            <div className="text-danger">
              <ErrorMessage name="firstName" />
            </div>
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" type="text" />
            <div className="text-danger">
              <ErrorMessage name="lastName" />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default StudentCreation;
