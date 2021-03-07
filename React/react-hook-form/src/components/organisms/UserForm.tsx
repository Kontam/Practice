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
    <form action="" onSubmit={handleSubmit} aria-label="user">
      <input type="text" name="name" ref={register}></input>
      <input
        type="submit"
        name="submit"
        ref={register}
        disabled={watchRadio ? undefined : true}
        value="submit"></input>
      <Radio options={radioOptions} register={register} name={radioName}
     handleOnChange={(e) => console.log('handleChange', e.target.value)} />
    </form>
  );
};

export default UserForm;
