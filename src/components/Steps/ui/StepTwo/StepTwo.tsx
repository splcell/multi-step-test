import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StepTwo.module.scss";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { questionData } from "@api/questionsData";
import { Input } from "@components/Input";

export const StepTwo = () => {
  const [value, setValue] = useState<string | string[]>([]);
  const navigate = useNavigate();

  return (
    <div>
      <Text text={questionData[1].question} />
      <div className={styles.variantsWrapper}>
        {questionData[1].variants?.map((variant, index) => (
          <Input
            type="checkbox"
            key={index}
            value={value}
            setValue={setValue}
            label={variant}
          />
        ))}
      </div>
      <Button onClick={() => navigate("/steps/3")} disabled={!value.length}>
        Ответить
      </Button>
    </div>
  );
};
