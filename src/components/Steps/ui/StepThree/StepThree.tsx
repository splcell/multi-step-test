import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StepThree.module.scss";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { questionData } from "@api/questionsData";
import { Input } from "@components/Input";

export const StepThree = () => {
  const [value, setvalue] = useState<string | string[]>("");
  const navigate = useNavigate();

  return (
    <div>
      <Text text={questionData[2].question} />
      <div className={styles.variantsWrapper}>
        <Input type="text" value={value} setValue={setvalue} />
      </div>
      <Button onClick={() => navigate("/steps/4")} disabled={value === ""}>
        Ответить
      </Button>
    </div>
  );
};
