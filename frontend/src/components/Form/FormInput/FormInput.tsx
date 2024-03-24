import React, {ChangeEvent, HTMLInputTypeAttribute} from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange?: (newData: string) => void;
  readOnly?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
                                               label,
                                               name,
                                               type,
                                               placeholder,
                                               value,
                                               readOnly,
                                               onChange,
                                             }) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  }
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
