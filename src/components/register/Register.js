import { useState } from "react";
import logo from "../../assets/img/whiteLogo.png";
import Forms from "../progress-form/Forms";

import { Stepper } from "@mui/material";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [0, 1, 2];

  const handleClick = (direction) => {
    let newStep = activeStep;
    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep >= 0 && newStep <= steps.length && setActiveStep(newStep);
  };

  return (
    <div style={{ backgroundColor: "#F4F4F4" }}>
      <div className="container-register">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="stepper-container">
          <Stepper orientation="vertical" activeStep={activeStep}>
            <Step>
              <StepLabel
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                REGISTRO DE EMPLEADO/APODERADO
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                REGISTRO DE LA EMPRESA
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                REGISTRO DE CUENTA BANCARIA
              </StepLabel>
            </Step>
          </Stepper>
        </div>
      </div>

      <div className="step">
        <Forms handleClick={handleClick} activeStep={activeStep} />
      </div>
    </div>
  );
};

export default Register;
