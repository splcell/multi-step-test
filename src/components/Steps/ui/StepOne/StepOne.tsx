import { useState } from "react";
import styles from "./StepOne.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { questionData } from "@api/questionsData";
import { Input } from "@components/Input";

export const StepOne = () => {
  const [value, setValue] = useState<string | string[]>("");
  const navigate = useNavigate();

  return (
    <div>
      <Text text={questionData[0].question} />
      <div className={styles.variantsWrapper}>
        {questionData[0].variants?.map((variant, index) => (
          <Input
            type="radio"
            key={index}
            value={value}
            setValue={setValue}
            label={variant}
          />
        ))}
      </div>
      <Button onClick={() => navigate("/steps/2")} disabled={value === ""}>
        Ответить
      </Button>
    </div>
  );
};
