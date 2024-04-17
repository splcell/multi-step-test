import { useState } from "react";
import styles from "./StepFour.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { TextArea } from "@components/TextArea";
import { questionData } from "@api/questionsData";

export const StepFour = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Text text={questionData[3].question} />
      <div className={styles.variantsWrapper}>
        <TextArea value={value} setValue={setValue} />
      </div>
      <Button onClick={() => navigate("/end")} disabled={value === ""}>
        Отправить и завершить
      </Button>
    </div>
  );
};
