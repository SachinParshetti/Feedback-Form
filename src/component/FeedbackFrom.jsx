import "../app.css";
import { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  teachingStyle: Yup.string().required("Required"),
  presentation: Yup.string().required("Required"),
  motivation: Yup.string().required("Required"),
  realtimeExamples: Yup.string().required("Required"),
  materialsUseful: Yup.string().required("Required"),
  courseDuration: Yup.string().required("Required"),
  doubtsClarified: Yup.string().required("Required"),
  topicsCovered: Yup.string().required("Required"),
  confidence: Yup.string().required("Required"),
  overallRating: Yup.number()
    .min(1, "Pick at least 1")
    .max(5)
    .required("Required"),
  wantDepth: Yup.string().required("Required"),
  suggestions: Yup.string().required("Required"),
});

export default function FeedbackForm2() {
  const [hover, setHover] = useState(0); 
  return (
    <Formik
      initialValues={{
        email: "",
        teachingStyle: "",
        presentation: "",
        motivation: "",
        realtimeExamples: "",
        materialsUseful: "",
        courseDuration: "",
        doubtsClarified: "",
        topicsCovered: "",
        confidence: "",
        overallRating: 0,
        wantDepth: "",
        suggestions: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert("form Submitted successfully")
        console.log(values);
        resetForm();
      }}
    >
      {({ values, setFieldValue, resetForm }) => (
        <div className="base">
          <div className="d-flex justify-content-center flex-wrap m-2 container-fluid">
            <Form >
            
              <div className="title">
                <div className="color-part" />
                <div className="d-flex justify-content-center">
                  <div className="title-container my-2">
                    React JS @7:30AM | Mr.Sudhakar Sharma
                  </div>
                </div>
                <div className="mx-4 mt-5">
                  <span className="text-danger">
                    * indicates required question
                  </span>
                </div>
              </div>

             
              <div className="base-container">
                <h6 className="mb-2">
                  Email<span className="text-danger"> *</span>
                </h6>
                 <Field
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className=""
                />
              
                <ErrorMessage
                  component="p"
                  name="email"
                  className="text-danger "
                />
              </div>

              
              <div className="base-container">
                <p>
                  How would you rate the faculty teaching style &amp; communication ?
                  <span className="text-danger"> *</span>
                </p>

                {["Very Effective", "Effective", "Neutral", "Ineffective"].map(
                  (label) => (
                    <div
                      key={label}
                      className="d-flex align-items-center mb-2 gap-2"
                    >
                      <Field
                        type="radio"
                        name="teachingStyle"
                        id={`style-${label}`}
                        value={label}
                        className="form-check-input"
                      />
                      <label htmlFor={`style-${label}`}>{label}</label>
                    </div>
                  )
                )}
                <ErrorMessage
                  component="p"
                  name="teachingStyle"
                  className="text-danger"
                />
              </div>

             
              <SelectField
                label="Presentation skills of the faculty while explaining the topics or delivering the content"
                name="presentation"
                options={[
                  "Very Excellent",
                  "Excellent",
                  "Neutral",
                  "Ineffective",
                ]}
              />

              <SelectField
                label="Does your faculty motivate and develop interest in the course or technology you are learning"
                name="motivation"
                options={[
                  "Strongly Motivated",
                  "Motivated",
                  "Neutral",
                  "Average",
                ]}
              />

              <SelectField
                label="Content or topics are being delivered using real‑time examples"
                name="realtimeExamples"
                options={["Very Helpful", "Helpful", "Average", "Poor"]}
              />

              <SelectField
                label="Were the course materials relevant and useful"
                name="materialsUseful"
                options={["Excellent", "Good", "Average", "Poor"]}
              />

              <SelectField
                label="How satisfied are you with the duration of the course"
                name="courseDuration"
                options={["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"]}
              />

              <SelectField
                label="Does your doubts &amp; questions get clarified by the faculty on time"
                name="doubtsClarified"
                options={["Always", "Most of the Time", "Sometimes", "Rarely"]}
              />

              <SelectField
                label="Did the faculty cover all the topics mentioned in Course Content"
                name="topicsCovered"
                options={["Yes", "Not Sure", "No"]}
              />

              <SelectField
                label="Rate the confidence &amp; skills you gained after completing the course"
                name="confidence"
                options={["Excellent", "Good", "Average", "Poor"]}
              />

             
              <div className="base-container">
                <p>
                  How would you rate your overall experience with the faculty
                  <span className="text-danger"> *</span>
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 d-sm-justify-content-center justify-content-around fs-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      role="button"
                      className={
                        star <= (hover || values.overallRating)
                          ? "bi bi-star-fill text-warning"
                          : "bi bi-star text-secondary"
                      }
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setFieldValue("overallRating", star)}
                    >
                      {" "}
                    </span>
                  ))}
                </div>
                <ErrorMessage
                  component="p"
                  name="overallRating"
                  className="text-danger mt-1"
                />
              </div>

              
              <TextField
                label="What topics would you like to see covered in more depth?"
                name="wantDepth"
              />

              <TextField
                label="Mention any suggestions you would like us to implement in improving the training sessions"
                name="suggestions"
                
              />

            
              <div className="base-container d-flex justify-content-between row gap-1">
                <button
                  type="submit"
                  className="btn col-md-3 col-sm-12"
                  style={{ backgroundColor: "rgb(79, 6, 214)", color: "white" }}
                >
                  Submit
                </button>

                <button
                  type="button"
                  className="btn btn-secondary col-md-3 col-sm-12" 
                  onClick={() => resetForm()}
                >
                  Clear form
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}


function SelectField({ label, name, options }) {
  return (
    <div className="base-container">
      <p>
        {label}
        <span className="text-danger ms-1">*</span>
      </p>
      <Field as="select" name={name} className="select">
        <option value="">Choose</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Field>
      <ErrorMessage component="p" name={name} className="text-danger" />
    </div>
  );
}

function TextField({ label, name }) {
  return (
    <div className="base-container">
      <p>
        {label}
        <span className="text-danger ms-1">*</span>
      </p>
      <Field
        name={name}
        as="textarea"
        placeholder="Your answer"
        className="textField"
      />
      <ErrorMessage component="p" name={name} className="text-danger" />
    </div>
  );
}



