import { useState } from "react";
import logo from "../../assets/img/whiteLogo.png";
import EmployeeForm from "../progress-form/EmployeeForm";
import CompanyForm from "../progress-form/CompanyForm";
import BankAccountForm from "../progress-form/BankAccountForm";

import { Stepper } from "@mui/material";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [0, 1, 2];

  const displayStep = (step) => {
    switch (step) {
      case 0:
        return <EmployeeForm handleClick={handleClick} />;
      case 1:
        return <CompanyForm handleClick={handleClick} />;
      case 2:
        return <BankAccountForm handleClick={handleClick} />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = activeStep;

    direction === "next" && newStep++;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setActiveStep(newStep);
  };

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <div className="container-register">
        <img src={logo} alt="" />
        <Stepper orientation="vertical" activeStep={activeStep}>
          <Step>
            <StepLabel>REGISTRO DE EMPLEADO/APODERADO</StepLabel>
          </Step>
          <Step>
            <StepLabel>REGISTRO DE LA EMPRESA</StepLabel>
          </Step>
          <Step>
            <StepLabel>REGISTRO DE CUENTA BANCARIA</StepLabel>
          </Step>
        </Stepper>
      </div>

      <div className="child2">{displayStep(activeStep)}</div>
    </div>
  );
};

export default Register;
