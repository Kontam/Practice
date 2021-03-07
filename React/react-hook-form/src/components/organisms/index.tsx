import React from 'react'
import Radio from '../molecules/Radio';
import {useFormValues} from './useFormValues';

const UserForm = () => {
  const { register, handleSubmit, radioOptions } = useFormValues();
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="name" ref={register}></input>
      <input type="submit" ref={register}></input>
      <Radio options={radioOptions} register={register} name={"department"} />
    </form>
  );
};

export default UserForm
