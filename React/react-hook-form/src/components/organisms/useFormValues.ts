import { useForm } from 'react-hook-form';
import { RadioOption } from '../molecules/Radio';

export const useFormValues = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  const options: RadioOption[] = [
    {
      id: "0001",
      label: "人事部",
      value: "1",
    }, 
    {
      id: "0002",
      label: "情報システム部",
      value: "2",
    }, 
    {
      id: "0003",
      label: "経営企画部",
      value: "3",
    }, 
  ];

  return {register, handleSubmit: handleSubmit(onSubmit), radioOptions: options};
};
