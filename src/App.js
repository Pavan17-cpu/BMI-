import React, { useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState("");
  const [weightValid, setWeightValid] = useState(true);
  const [heightValid, setHeightValid] = useState(true);

  const calculateBMI = () => {
   
    if (weight <= 0 || isNaN(weight)) {
      setWeightValid(false);
      return;
    } else {
      setWeightValid(true);
    }

    if (height <= 0 || isNaN(height)) {
      setHeightValid(false);
      return;
    } else {
      setHeightValid(true);
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMessage(
        <span style={{ color: "yellow" }}>
          <FaExclamationCircle /> Your BMI is low. Potential side effects include fatigue, weakness, and a weakened immune system.
        </span>
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage(
        <span style={{ color: "green" }}>
          <FaCheckCircle /> Congrats! Your BMI is normal. Your health is good.
        </span>
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage(
        <span style={{ color: "#ff9999" }}>
          <FaExclamationCircle /> Your BMI is high. Potential side effects include increased risk of heart disease, high blood pressure, and diabetes.
        </span>
      );
    } else {
      setMessage(
        <span style={{ color: "#cc3333" }}>
          <FaExclamationCircle /> Your BMI is very high. Please consult a healthcare professional for advice.
        </span>
      );
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bmi-container">
            <h2 className="text-center">BMI Calculator</h2>
            <div className="form-group">
              <label>Weight (kg): </label>
              <input
                type="number"
                className={`form-control ${!weightValid ? "is-invalid" : ""}`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              {!weightValid && <div className="invalid-feedback">Weight cannot be negative or zero.</div>}
            </div>
            <div className="form-group">
              <label>Height (cm): </label>
              <input
                type="number"
                className={`form-control ${!heightValid ? "is-invalid" : ""}`}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              {!heightValid && <div className="invalid-feedback">Height cannot be negative or zero.</div>}
            </div>
            <div className="text-center mt-3"> {/* Added margin top */}
              <button className="btn btn-primary calculate-btn" onClick={calculateBMI}>Calculate BMI</button>
            </div>
            {bmi && <p>Your BMI: {bmi}</p>}
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
