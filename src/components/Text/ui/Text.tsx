import styles from './Text.module.scss'

interface TextProps{
  text: string;
}

export const Text = ({text}: TextProps) => {
  return(
    <p className={styles.text}>{text}</p>
  )
}