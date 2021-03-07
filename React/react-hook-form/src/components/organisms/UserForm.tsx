import React from 'react';
import Radio from '../molecules/Radio';
import {useFormValues} from './useFormValues';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    radioOptions,
    radioName,
    watchRadio,
  } = useFormValues();
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="name" ref={register}></input>
      <input
        type="submit"
        ref={register}
        disabled={watchRadio ? undefined : true}
        value="submit"></input>
      <Radio options={radioOptions} register={register} name={radioName} />
    </form>
  );
};

export default UserForm;
