import { useParams } from "react-router-dom";
import { StepOne } from "../StepOne/StepOne";
import { useMemo } from "react";
import { StepTwo } from "../StepTwo/StepTwo";
import { StepThree } from "../StepThree/StepThree";
import { StepFour } from "../StepFour/StepFour";


export const StepsWrapper = () => {
  const { step } = useParams();

  const stepsRender = useMemo(() => {
    switch (step) {
      case "1":
        return <StepOne />;
      case "2":
        return <StepTwo />;

      case "3":
        return <StepThree />;
      case "4":
        return <StepFour />;
    }

    return null;
  }, [step]);

  return <form>{stepsRender}</form>;
};
