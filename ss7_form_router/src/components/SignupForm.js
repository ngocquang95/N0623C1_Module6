import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";

const SignupForm = () => {
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
        // call API
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <div>
            <Field id="firstName" name="firstName" type="text" />
            <div className="text-danger">
              <ErrorMessage name="firstName" />
            </div>
          </div>

          <div>
            <Field id="lastName" name="lastName" type="text" />
            <div className="text-danger">
              <ErrorMessage name="lastName" />
            </div>
          </div>
          <div>
            <Field id="email" name="email" type="email" />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>

          {/* <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null} */}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
