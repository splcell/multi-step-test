
import { HTMLAttributes, memo, useMemo, useState } from "react";
import styles from './Input.module.scss'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  value: string | string[];
  setValue: React.Dispatch<React.SetStateAction<string | string[]>>;
  label?: string;
}

export const Input = memo(({ type, value, setValue, label, ...props }: InputProps) => {
  // eslint-disable-next-line
  const [isChecked, setIsChecked] = useState(false);
  // eslint-disable-next-line
  const [isRadioChecked, setRadioChecked] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
    if (Array.isArray(value) && isChecked && label) {
      setValue((prevValue) => [...(Array.isArray(prevValue) ? prevValue : [prevValue]), label]);
    }

    if(Array.isArray(value) && !isChecked && label){
      const newValue = value.filter(item => item !== label)
      setValue([...newValue])
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isRadioChecked = e.target.checked
    setRadioChecked(isRadioChecked)

    if(label){
      setValue(label)
    }
  }

  const renderInputs = useMemo(() => {
    switch (type) {
      case 'checkbox':
        return (
          <label className={styles.checkboxWrapper}>
              <input type="checkbox" className={styles.checkbox} value={value} onChange={handleCheckboxChange} {...props} />
              {label}
            <span className={styles.checkSpan}></span>
          </label>
        );

      case 'radio':
        return(
          <label className={styles.radioWrapper}>
              <input type="radio" className={styles.radio} value={value} name="radio" onChange={handleRadioChange} {...props} />
              {label}
            <span className={styles.radioSpan}></span>
          </label>
        )
    }
    return null;
  }, [type]);

  return (
    <>
      {type !== 'checkbox' && type !== 'radio' ? <input type={type} value={value} onChange={(e) => setValue(e.target.value)} {...props} /> : renderInputs}
    </>
  );
});