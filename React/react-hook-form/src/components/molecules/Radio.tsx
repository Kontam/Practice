import React, {useState} from 'react';

export type RadioOption = {
  id: string,
  label: string,
  value: string,
};

type Props = {
  register: any,
  options: RadioOption[],
  defaultChecked?: string,
  name: string,
};

const Radio: React.FC<Props> = props => {
  const [checkedItem, setCheckedItem] = useState(props.defaultChecked);
  const handleOnChange = (value: string) => setCheckedItem(value);
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
                checked={option.value === checkedItem}
                onChange={() => handleOnChange(option.value)}
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
