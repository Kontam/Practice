import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p>1</p>
        </li>
        <li className={styles.item}>
          <p>2</p>
          <div className={styles.toolTip}>
            <p className={styles.toolTipText}>任意のテキストが入ります</p>
          </div>
        </li>
        <li className={styles.item}>
          <p>3</p>
        </li>
      </ul>
    </div>
  )
}
