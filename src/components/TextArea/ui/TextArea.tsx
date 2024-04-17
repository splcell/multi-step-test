
interface TextAreaProps{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const TextArea = ({value, setValue}: TextAreaProps) => {
  return(
    <textarea value={value} onChange={(e) => setValue(e.target.value)}/>
  )
}