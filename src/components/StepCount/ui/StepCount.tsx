import { useParams } from 'react-router-dom'
import styles from './StepCount.module.scss'
import cn from 'classnames'

export const StepCount = () => {
  const totalSteps = 5;
  const { step } = useParams();

  const steps: number[] = []
  
  for(let i = 1; i < totalSteps; i++){
    steps.push(i)
  }

  return(
    <div className={styles.stepsWrapper}>
      {steps.map(item => (
        <span key={item} className={cn(styles.step, {
          [styles.prevStep]: item < Number(step),
          [styles.currentStep]: item === Number(step),
          [styles.nextStep]: item > Number(step)
        })}></span>
      ))}
    </div>
  )
}