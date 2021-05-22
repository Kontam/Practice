import React, {CSSProperties, useState} from 'react';

const buttonStyle: CSSProperties = {
  height: 30,
  width: 60,
  textAlign: 'center',
  backgroundColor: 'gray',
  color: 'white',
};

const Home: React.FC = () => {
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

  return (
    <div>
      <div>
        <strong>name</strong>
      </div>
      <input type="text" name="text" onChange={e => setName(e.target.value)} />

      <div style={{marginTop: 10}}>
        <strong>choose animals</strong>
      </div>

      <div style={{display: 'flex'}}>
        <div style={{marginRight: 10}}>
          <div>Cat</div>
          <input
            type="checkbox"
            name="text"
            value="cat"
            onChange={handleCheck}
          />
        </div>
        <div style={{marginRight: 10}}>
          <div>Dog</div>
          <input
            type="checkbox"
            name="text"
            value="dog"
            onChange={handleCheck}
          />
        </div>
        <div>
          <div>tiger</div>
          <input
            type="checkbox"
            name="text"
            value="tiger"
            onChange={handleCheck}
          />
        </div>
      </div>

      <div style={buttonStyle} onClick={handleSubmit}>
        submit
      </div>
    </div>
  );
};

export default Home;
