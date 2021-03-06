import React from 'react'
import { useForm } from 'react-hook-form';

const UserForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" ref={register}></input>
      <input type="submit" ref={register}></input>
    </form>
  );
};

export default UserForm
