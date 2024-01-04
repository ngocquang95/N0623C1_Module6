"use client"

import axios from "axios";
import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import * as Yup from "yup";

const StudentCreation = () => {
  const router = useRouter();
  const x = undefined;
  x.y = "";

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
              timer: 1500,
            });

            router.push("/student");
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
