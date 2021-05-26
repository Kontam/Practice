import React, { useState } from "react";
import styles from "./divForm.module.css";

const DivForm: React.FC = () => {
  const [name, setName] = useState("");
  const [animals, setAnimals] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);
  const handleCheck: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setAnimals([...animals, e.target.value]);
      return;
    }
    setAnimals(animals.filter((animal) => animal !== e.target.value));
  };
  const isDisabled = !name || animals.length === 0;
  // 入力されている名前とチェックされている動物をコンソールに出す
  const handleSubmit = () => {
    if (isDisabled) return;
    setIsDone(true);
  };

  const checkList = [
    { name: "cat", label: "Cat" },
    { name: "dog", label: "Dog" },
    { name: "tiger", label: "Tiger" },
  ];
  return (
    <div>
      <h1 className={styles.mainHeading}>Test Form</h1>
      <label className={styles.subHeading}>
        name
        <input
          type="text"
          name="text"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <h2 className={styles.subHeading}>choose animals</h2>

      {/* 動物のチェックボックスリスト */}
      <ul className={styles.form}>
        {checkList.map((item) => (
          <li key={item.name} className={styles.item}>
            <label>
              {item.label}
              <input type="checkbox" name={item.name} onChange={handleCheck} />
            </label>
          </li>
        ))}
      </ul>

      <button onClick={handleSubmit} disabled={isDisabled}>
        submit
      </button>
      {isDone && <div className={styles.success}>SUCCESS!!</div>}
    </div>
  );
};

export default DivForm;
