import { Container } from "@components/Container";
import styles from "./TestPage.module.scss";
import { Timer } from "@components/Timer";
import { StepCount } from "@components/StepCount";
import { StepsWrapper } from "@components/Steps";

export const TestPage = () => {
  return (
    <Container>
      <div className={styles.testWrapper}>
        <div className={styles.topContent}>
          <div className={styles.topInfo}>
            <h2 className={styles.testTitle}>Тестирование</h2>
            <Timer startMilliseconds={300000} />
          </div>
          <div>
            <StepCount />
          </div>
        </div>
        <div className={styles.testContent}>
          <StepsWrapper />
        </div>
      </div>
    </Container>
  );
};
