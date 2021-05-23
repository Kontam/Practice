import React, {CSSProperties, useState} from 'react';

const buttonStyle: CSSProperties = {
  height: 30,
  width: 60,
  textAlign: 'center',
  backgroundColor: 'gray',
  color: 'white',
};

const DivForm: React.FC = () => {
  const [name, setName] = useState('');
  const [animals, setAnimals] = useState<string[]>([]);
  const handleCheck: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.checked) {
      setAnimals([...animals, e.target.value]);
      return;
    }
    setAnimals(animals.filter(animal => animal !== e.target.value));
  };

  // 入力されている名前とチェックされている動物をコンソールに出す
  const handleSubmit = () => {
    console.log(`name:${name}`, `animals:${animals.join(',')}`);
  };

  const checkList = [
    {name: 'cat', label: 'Cat'},
    {name: 'dog', label: 'Dog'},
    {name: 'tiger', label: 'Tiger'},
  ];
  return (
    <div>
      <h1>Test Form</h1>
      <div>
        <strong>name</strong>
      </div>
      <input type="text" name="text" onChange={e => setName(e.target.value)} />

      <div style={{marginTop: 10}}>
        <strong>choose animals</strong>
      </div>

      {/* 動物のチェックボックスリスト */}
      <div style={{display: 'flex'}}>
        {checkList.map(item => (
          <div key={item.name} style={{marginRight: 10}}>
            <div>{item.label}</div>
            <input type="checkbox" name={item.name} onChange={handleCheck} />
          </div>
        ))}
      </div>

      <div style={buttonStyle} onClick={handleSubmit}>
        submit
      </div>
    </div>
  );
};

export default DivForm;
