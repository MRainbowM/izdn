import Link from 'next/link';
import styles from './Header.module.scss';



export default async function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.exchangeRate}>
        </div>
        <div className={styles.logo}>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.search}></div>
          <div className={styles.menu}></div>
        </div>

      </div>
    </header>
  );
}; 