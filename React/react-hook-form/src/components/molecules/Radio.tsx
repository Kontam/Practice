import React, {useState} from 'react';
import {UseFormMethods} from 'react-hook-form';

export type RadioOption = {
  id: string,
  label: string,
  value: string,
};

type Props = {
  register?: UseFormMethods["register"],
  options: RadioOption[],
  defaultChecked?: string,
  name: string,
  handleOnChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Radio: React.FC<Props> = props => {
  const [checkedItem, setCheckedItem] = useState(props.defaultChecked);
  const OnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    props.handleOnChange && props.handleOnChange(e);
    setCheckedItem(e.target.value);
  }
  return (
    <ul>
      {props.options.map(option => {
        return (
          <li key={option.id}>
            <label>
              <input
                type="radio"
                name={props.name}
                ref={props.register}
                value={option.value}
                checked={props.register ? undefined : (checkedItem === option.value)}
                onChange={OnChange}
              />
              {option.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default Radio;
