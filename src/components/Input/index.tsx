import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { InputContainer, InputText, ErrorText } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};

export { Input };
