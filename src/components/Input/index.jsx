import React from 'react';
import { Controller } from 'react-hook-form';
import { InputContainer, InputText, ErrorText } from './styles';

const Input = ({ name, control, errorMessage, ...rest }) => {
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